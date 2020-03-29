import { Decision } from '../interfaces/decision';

export class ApplyDecisionCommand {
  constructor(public decision: Decision) {}
}
