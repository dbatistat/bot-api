import { CommandHandler, IQueryHandler, CommandBus } from '@nestjs/cqrs';
import { ProblemDecisionCommand } from '../commands/problem-decision.command';
import { ProblemAnswerCommand } from '../../nlg/commands/problem-answer.command';

@CommandHandler(ProblemDecisionCommand)
export class ProblemDecisionHandler
  implements IQueryHandler<ProblemDecisionCommand> {
  constructor(private readonly commandBus: CommandBus) {}
  execute(query: ProblemDecisionCommand): Promise<any> {
    return this.commandBus.execute(new ProblemAnswerCommand());
  }
}
