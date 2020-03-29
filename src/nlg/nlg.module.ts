import { Module } from '@nestjs/common';
import { ProblemAnswerHandler } from './handlers/problem-answer.handler';
import { ReceiveAnswerHandler } from './handlers/receive-answer.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { NoUnderstandAnswerHanlder } from './handlers/no-understand-answer.hanlder';

export const CommandHandlers = [
  ReceiveAnswerHandler,
  ProblemAnswerHandler,
  NoUnderstandAnswerHanlder,
];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers],
})
export class NlgModule {}
