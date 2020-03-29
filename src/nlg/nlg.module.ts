import { Module } from '@nestjs/common';
import { ProblemAnswerHandler } from './handlers/problem-answer.handler';
import { ReceiveAnswerHandler } from './handlers/receive-answer.handler';
import { CqrsModule } from '@nestjs/cqrs';

export const CommandHandlers = [ProblemAnswerHandler, ReceiveAnswerHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers],
})
export class NlgModule {}
