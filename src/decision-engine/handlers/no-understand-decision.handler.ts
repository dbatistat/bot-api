import { CommandHandler, IQueryHandler, CommandBus } from '@nestjs/cqrs';
import { NoUnderstandDecisionCommand } from '../commands/no-understand-decision.command';
import { ProblemAnswerCommand } from '../../nlg/commands/problem-answer.command';

@CommandHandler(NoUnderstandDecisionCommand)
export class NoUnderstandDecisionHandler
  implements IQueryHandler<NoUnderstandDecisionCommand> {
  constructor(private readonly commandBus: CommandBus) {}
  execute(query: NoUnderstandDecisionCommand): Promise<any> {
    return this.commandBus.execute(new ProblemAnswerCommand());
  }
}
