import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ReceiveMessageCommand } from '../nlp/commands/receive-message.command';

@Injectable()
export class MessagingService {
  constructor(private readonly commandBus: CommandBus) {}

  receive(message: { message: string }) {
    return this.commandBus.execute(new ReceiveMessageCommand(message.message));
  }
}
