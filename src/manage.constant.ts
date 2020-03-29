import { NlpManager } from 'node-nlp';

export const nlpManager = new NlpManager({
  languages: ['es'],
  nlu: { useNoneFeature: false },
});

export const nlpTraining = async () => {
  nlpManager.addDocument('es', 'hola', 'greetings.hello');
  nlpManager.addDocument('es', 'hola luka!', 'greetings.hello');
  nlpManager.addDocument('es', 'pagar', 'greetings.hello');
  nlpManager.addDocument('es', 'quiero hacer un pago', 'greetings.hello');
  nlpManager.addAnswer(
    'es',
    'greetings.answer.hello',
    '¡Hola {{name}}! Soy Luka, un asistente de pagos por chat 👋🤖',
    { type: 'new', order: 1 },
  );
  nlpManager.addAnswer(
    'es',
    'greetings.answer.hello',
    'He sido creado para que puedas hacer tus pagos de manera fácil, rápida y segura 🔒',
    { type: 'new', order: 2 },
  );
  nlpManager.addAnswer(
    'es',
    'greetings.answer.hello',
    '¡Hola de nuevo {{name}}! que bueno que hayas vuelto',
    { type: 'back', order: 1 },
  );

  // Default answer
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
