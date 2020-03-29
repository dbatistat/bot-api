import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';
import { UserDatabase } from '../user.database';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand): Promise<any> {
    const lastUser = UserDatabase[UserDatabase.length - 1];
    const newUser = {
      id: lastUser.id + 1,
      code: command.code,
    };
    UserDatabase.push(newUser);
    return Promise.resolve(newUser);
  }
}
