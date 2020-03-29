import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SendMessageCommand } from '../commands/send-message.command';
import { nlpManager } from '../../manage.constant';
import { ReceiveMessageCommand } from '../commands/receive-message.command';

@CommandHandler(ReceiveMessageCommand)
export class SearchMessageHandler
  implements ICommandHandler<ReceiveMessageCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  async execute(query: ReceiveMessageCommand): Promise<any> {
    const nlp = await nlpManager.process('es', query.message);
    return this.commandBus.execute(new SendMessageCommand(nlp));
  }
}
