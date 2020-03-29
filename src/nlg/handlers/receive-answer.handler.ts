import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ReceiveAnswerCommand } from '../commands/receive-answer.command';
import { nlpManager } from '../../manage.constant';
import { ProblemAnswerCommand } from '../commands/problem-answer.command';

@CommandHandler(ReceiveAnswerCommand)
export class ReceiveAnswerHandler
  implements ICommandHandler<ReceiveAnswerCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  execute(query: ReceiveAnswerCommand): Promise<any> {
    const answer = nlpManager.findAllAnswers('es', query.intent);
    if (answer) {
      return Promise.resolve(answer);
    }
    return this.commandBus.execute(new ProblemAnswerCommand());
  }
}
