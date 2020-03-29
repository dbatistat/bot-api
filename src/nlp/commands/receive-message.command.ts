import { Message } from '../../messaging/interfaces/message.interface';

export class ReceiveMessageCommand {
  constructor(public message: Message) {}
}
