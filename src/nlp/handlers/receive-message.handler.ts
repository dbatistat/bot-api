import { ReceiveMessageCommand } from '../commands/receive-message.command';

import { CommandBus, CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { SearchMessageCommand } from '../commands/search-message.command';

@CommandHandler(ReceiveMessageCommand)
export class ReceiveMessageHandler
  implements IQueryHandler<ReceiveMessageCommand> {
  constructor(private readonly commandBus: CommandBus) {}
  async execute(query: ReceiveMessageCommand): Promise<any> {
    // Maybe this handler can validate the data
    return this.commandBus.execute(new SearchMessageCommand(query.message.toLowerCase()));
  }
}
