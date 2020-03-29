import { CommandHandler, IQueryHandler, CommandBus } from '@nestjs/cqrs';
import { ReceiveDecisionCommand } from '../commands/receive-decision.command';
import { SearchDecisionCommand } from '../commands/search-decision.command';

@CommandHandler(ReceiveDecisionCommand)
export class ReceiveDecisionHandler
  implements IQueryHandler<ReceiveDecisionCommand> {
  constructor(private readonly commandBus: CommandBus) {}
  execute(query: ReceiveDecisionCommand): Promise<any> {
    return this.commandBus.execute(new SearchDecisionCommand(query.nlp.intent));
  }
}
