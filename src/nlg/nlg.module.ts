import { Module } from '@nestjs/common';
import { ProblemAnswerHandler } from './handlers/problem-answer.handler';
import { ReceiveAnswerHandler } from './handlers/receive-answer.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { NoUnderstandAnswerHandler } from './handlers/no-understand-answer.handler';

export const CommandHandlers = [
  ReceiveAnswerHandler,
  ProblemAnswerHandler,
  NoUnderstandAnswerHandler,
];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers],
})
export class NlgModule {}
