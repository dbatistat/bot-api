import { Body, Controller, Post } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { Message } from './interfaces/message.interface';

@Controller('messaging')
export class MessagingController {
  constructor(private service: MessagingService) {}

  @Post()
  receiveMessage(@Body() message: Message) {
    return this.service.receive(message);
  }
}
