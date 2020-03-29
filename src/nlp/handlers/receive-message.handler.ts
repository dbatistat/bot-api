import { ReceiveMessageCommand } from '../commands/receive-message.command';

import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchMessageCommand } from '../commands/search-message.command';

@CommandHandler(ReceiveMessageCommand)
export class ReceiveMessageHandler
  implements ICommandHandler<ReceiveMessageCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  async execute({ message }: ReceiveMessageCommand): Promise<any> {
    // Maybe this handler can validate the data
    return this.commandBus.execute(new SearchMessageCommand(message));
  }
}
