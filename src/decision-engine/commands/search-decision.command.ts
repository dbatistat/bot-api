import { Decision } from '../interfaces/decision';

export class SearchDecisionCommand {
  constructor(public decision: Decision) {}
}
