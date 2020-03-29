import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ReceiveMessageCommand } from '../nlp/commands/receive-message.command';
import { Message } from './interfaces/message.interface';

@Injectable()
export class MessagingService {
  constructor(private readonly commandBus: CommandBus) {}

  receive(message: Message) {
    return this.commandBus.execute(new ReceiveMessageCommand(message));
  }
}
