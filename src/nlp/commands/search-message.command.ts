import { Message } from '../../messaging/interfaces/message.interface';

export class SearchMessageCommand {
  constructor(public message: Message) {}
}
