import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { FindUserByCodeHandler } from './handlers/find-user-by-code.handler';
import { CreateUserHandler } from './handlers/create-user.handler';
import { CqrsModule } from '@nestjs/cqrs';

const queryHandlers = [FindUserByCodeHandler];
const commandHandlers = [CreateUserHandler];

@Module({
  imports: [CqrsModule],
  providers: [UserService, ...queryHandlers, ...commandHandlers],
})
export class UserModule {}
