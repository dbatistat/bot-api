import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SendMessageCommand } from '../commands/send-message.command';
import { nlpManager } from '../../manage.constant';
import { ReceiveMessageCommand } from '../commands/receive-message.command';

@CommandHandler(ReceiveMessageCommand)
export class SearchMessageHandler
  implements ICommandHandler<ReceiveMessageCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  async execute({ message }: ReceiveMessageCommand): Promise<any> {
    const { intent } = await nlpManager.process('es', message.message);
    return this.commandBus.execute(
      new SendMessageCommand({ intent, userCode: message.userCode }),
    );
  }
}
