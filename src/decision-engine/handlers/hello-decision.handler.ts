import {
  CommandBus,
  CommandHandler,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { HelloDecision } from '../decisions/hello.decision';
import { ReceiveAnswerCommand } from '../../nlg/commands/receive-answer.command';
import { FindUserByCodeQuery } from '../../decision-services/user/queries/find-user-by-code.query';
import { CreateUserCommand } from '../../decision-services/user/commands/create-user.command';

@CommandHandler(HelloDecision)
export class HelloDecisionHandler implements ICommandHandler<HelloDecision> {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({ message }: HelloDecision): Promise<any> {
    const answers = await this.commandBus.execute(
      new ReceiveAnswerCommand('greetings.answer.hello'),
    );
    const user = await this.queryBus.execute(
      new FindUserByCodeQuery(message.userCode),
    );
    if (user) {
      return answers.filter(d => d.opts.type === 'back');
    }
    const newUser = await this.commandBus.execute(
      new CreateUserCommand(message.userCode),
    );
    return answers.filter(d => d.opts.type === 'new');
  }
}
