import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { NoUndestandAnswerCommand } from '../commands/no-undestand-answer.command';
import { nlpManager } from '../../manage.constant';

@CommandHandler(NoUndestandAnswerCommand)
export class NoUnderstandAnswerHanlder
  implements IQueryHandler<NoUndestandAnswerCommand> {
  execute(query: NoUndestandAnswerCommand): Promise<any> {
    const answer = nlpManager.findAllAnswers('es', 'no.understand');
    return answer;
  }
}
