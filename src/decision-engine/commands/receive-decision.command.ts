import { Decision } from '../interfaces/decision';

export class ReceiveDecisionCommand {
  constructor(public decision: Decision) {}
}
