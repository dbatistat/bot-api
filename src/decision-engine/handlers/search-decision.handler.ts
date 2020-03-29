import { SearchDecisionCommand } from '../commands/search-decision.command';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NoUnderstandDecisionCommand } from '../commands/no-understand-decision.command';
import { Decisions } from '../decisions/decisions.constant';

@CommandHandler(SearchDecisionCommand)
export class SearchDecisionHandler
  implements ICommandHandler<SearchDecisionCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  execute({ decision }: SearchDecisionCommand): Promise<any> {
    const decisionFound = Decisions.find(d => (d.intent = decision.intent));

    if (!decisionFound) {
      return this.commandBus.execute(new NoUnderstandDecisionCommand());
    }

    const { decisionClass } = decisionFound;
    return this.commandBus.execute(new decisionClass(decision));
  }
}
