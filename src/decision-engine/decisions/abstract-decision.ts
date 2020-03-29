import { Decision } from '../interfaces/decision';

export abstract class AbstractDecision {
  constructor(public message: Decision) {
  }
}
