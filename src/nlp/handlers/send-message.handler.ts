import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SendMessageCommand } from '../commands/send-message.command';
import { ReceiveDecisionCommand } from '../../decision-engine/commands/receive-decision.command';

@CommandHandler(SendMessageCommand)
export class SendMessageHandler implements ICommandHandler<SendMessageCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  execute({ decision }: SendMessageCommand): Promise<any> {
    return this.commandBus.execute(new ReceiveDecisionCommand(decision));
  }
}
