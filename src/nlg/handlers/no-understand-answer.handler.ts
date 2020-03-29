import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NoUndestandAnswerCommand } from '../commands/no-undestand-answer.command';
import { nlpManager } from '../../manage.constant';

@CommandHandler(NoUndestandAnswerCommand)
export class NoUnderstandAnswerHandler
  implements ICommandHandler<NoUndestandAnswerCommand> {
  execute(query: NoUndestandAnswerCommand): Promise<any> {
    const answer = nlpManager.findAllAnswers('es', 'no.understand');
    return answer;
  }
}
