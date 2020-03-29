import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProblemAnswerCommand } from '../commands/problem-answer.command';
import { nlpManager } from '../../manage.constant';

@CommandHandler(ProblemAnswerCommand)
export class ProblemAnswerHandler
  implements ICommandHandler<ProblemAnswerCommand> {
  execute(query: ProblemAnswerCommand): Promise<any> {
    const answer = nlpManager.findAllAnswers('es', 'problems');
    return answer;
  }
}
