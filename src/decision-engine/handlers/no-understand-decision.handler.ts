import { CommandBus, CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { NoUnderstandDecisionCommand } from '../commands/no-understand-decision.command';
import { NoUndestandAnswerCommand } from '../../nlg/commands/no-undestand-answer.command';

@CommandHandler(NoUnderstandDecisionCommand)
export class NoUnderstandDecisionHandler
  implements IQueryHandler<NoUnderstandDecisionCommand> {
  constructor(private readonly commandBus: CommandBus) {}
  execute(query: NoUnderstandDecisionCommand): Promise<any> {
    return this.commandBus.execute(new NoUndestandAnswerCommand());
  }
}
