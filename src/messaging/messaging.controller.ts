import { Body, Controller, Post } from '@nestjs/common';
import { MessagingService } from './messaging.service';

@Controller('messaging')
export class MessagingController {
  constructor(private service: MessagingService) {}

  @Post()
  receiveMessage(@Body() message: { message: string }) {
    return this.service.receive(message);
  }
}
