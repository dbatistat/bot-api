import { Module } from '@nestjs/common';
import { NoUnderstandDecisionHandler } from './handlers/no-understand-decision.handler';
import { ProblemDecisionHandler } from './handlers/problem-decision.handler';
import { ReceiveDecisionHandler } from './handlers/receive-decision.handler';
import { SearchDecisionHandler } from './handlers/search-decision.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModule } from '../decision-services/user/user.module';
import { HelloDecisionHandler } from './handlers/hello-decision.handler';

export const CommandHandlers = [
  NoUnderstandDecisionHandler,
  ProblemDecisionHandler,
  ReceiveDecisionHandler,
  SearchDecisionHandler,
];

export const DecisionHandlers = [HelloDecisionHandler];

@Module({
  imports: [CqrsModule, UserModule],
  providers: [...CommandHandlers, ...DecisionHandlers],
})
export class DecisionEngineModule {}
