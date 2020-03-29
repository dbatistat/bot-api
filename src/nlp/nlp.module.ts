import { Module } from '@nestjs/common';
import { ReceiveMessageHandler } from './handlers/receive-message.handler';
import { SearchMessageHandler } from './handlers/search-message.handler';
import { SendMessageHandler } from './handlers/send-message.handler';
import { CqrsModule } from '@nestjs/cqrs';

export const CommandHandlers = [
  ReceiveMessageHandler,
  SearchMessageHandler,
  SendMessageHandler,
];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers],
})
export class NlpModule {}
