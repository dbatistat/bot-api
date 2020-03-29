import { CommandBus, CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { SendMessageCommand } from '../commands/send-message.command';
import { ReceiveDecisionCommand } from '../../decision-engine/commands/receive-decision.command';

@CommandHandler(SendMessageCommand)
export class SendMessageHandler implements IQueryHandler<SendMessageCommand> {
  constructor(private readonly commandBus: CommandBus) {}

  execute(query: SendMessageCommand): Promise<any> {
    return this.commandBus.execute(new ReceiveDecisionCommand(query.nlp));
  }
}
