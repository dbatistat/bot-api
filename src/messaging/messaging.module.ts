import { Module } from '@nestjs/common';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';
import { NlpModule } from '../nlp/nlp.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule, NlpModule],
  controllers: [MessagingController],
  providers: [MessagingService],
})
export class MessagingModule {}
