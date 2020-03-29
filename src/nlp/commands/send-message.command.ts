import { Decision } from '../../decision-engine/interfaces/decision';

export class SendMessageCommand {
  constructor(public decision: Decision) {}
}
