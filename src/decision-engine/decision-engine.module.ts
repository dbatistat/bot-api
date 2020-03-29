import { Module } from '@nestjs/common';
import { ApplyDecisionHandler } from './handlers/apply-decision.handler';
import { NoUnderstandDecisionHandler } from './handlers/no-understand-decision.handler';
import { ProblemDecisionHandler } from './handlers/problem-decision.handler';
import { ReceiveDecisionHandler } from './handlers/receive-decision.handler';
import { SearchDecisionHandler } from './handlers/search-decision.handler';
import { CqrsModule } from '@nestjs/cqrs';

export const CommandHandlers = [
  ApplyDecisionHandler,
  NoUnderstandDecisionHandler,
  ProblemDecisionHandler,
  ReceiveDecisionHandler,
  SearchDecisionHandler,
];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers],
})
export class DecisionEngineModule {}
