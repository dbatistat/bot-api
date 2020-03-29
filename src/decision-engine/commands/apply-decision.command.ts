import { Decision } from '../decisions/decision.interface';

export class ApplyDecisionCommand {
  constructor(public decision: Decision) {}
}
