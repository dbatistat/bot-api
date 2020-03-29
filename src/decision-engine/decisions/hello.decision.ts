import { Decision } from './decision.interface';

export class HelloDecision implements Decision {
  async execute(): Promise<any> {
    return Promise.resolve({ intent: 'greetings.answer.hello' });
  }
}
