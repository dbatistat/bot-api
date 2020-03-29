import { CommandHandler, IQueryHandler, CommandBus } from '@nestjs/cqrs';
import { ApplyDecisionCommand } from '../commands/apply-decision.command';
import { ReceiveAnswerCommand } from '../../nlg/commands/receive-answer.command';

@CommandHandler(ApplyDecisionCommand)
export class ApplyDecisionHandler
  implements IQueryHandler<ApplyDecisionCommand> {
  constructor(private readonly commandBus: CommandBus) {}
  async execute(query: ApplyDecisionCommand): Promise<any> {
    const decisionResult = await query.decision.execute();
    return this.commandBus.execute(new ReceiveAnswerCommand(decisionResult.intent));
  }
}
