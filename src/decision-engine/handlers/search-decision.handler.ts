import { SearchDecisionCommand } from '../commands/search-decision.command';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HelloDecision } from '../decisions/hello.decision';
import { ApplyDecisionCommand } from '../commands/apply-decision.command';
import { NoUnderstandDecisionCommand } from '../commands/no-understand-decision.command';

@CommandHandler(SearchDecisionCommand)
export class SearchDecisionHandler
  implements ICommandHandler<SearchDecisionCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  execute(query: SearchDecisionCommand): Promise<any> {
    const decisions = [
      { intent: 'greetings.hello', decision: new HelloDecision() },
    ];
    const decision = decisions.find(d => d.intent === query.intent);
    return decision
      ? this.commandBus.execute(new ApplyDecisionCommand(decision.decision))
      : this.commandBus.execute(new NoUnderstandDecisionCommand());
  }
}
