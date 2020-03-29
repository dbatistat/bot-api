import { NlpManager } from 'node-nlp';

export const nlpManager = new NlpManager({
  languages: ['es'],
  nlu: { useNoneFeature: false },
});

export const nlpTraining = async () => {
  nlpManager.addDocument('es', 'hola', 'greetings.hello');
  nlpManager.addDocument('es', 'hola luka!', 'greetings.hello');
  nlpManager.addDocument('es', 'holaaaa', 'greetings.hello');
  nlpManager.addAnswer('es', 'greetings.answer.hello', 'Hola humano!!');
  nlpManager.addAnswer(
    'es',
    'no.understand',
    'No entiendo lo que me quieres decir :s',
  );
  nlpManager.addAnswer(
    'es',
    'problems',
    'He tenido problemas de procesar lo que intentas decir, por favor intenta mas tarde',
  );
  await nlpManager.train();
  nlpManager.save();
};
