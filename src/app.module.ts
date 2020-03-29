import { Module } from '@nestjs/common';
import { MessagingModule } from './messaging/messaging.module';
import { NlpModule } from './nlp/nlp.module';
import { NlgModule } from './nlg/nlg.module';
import { DecisionEngineModule } from './decision-engine/decision-engine.module';

@Module({
  imports: [MessagingModule, NlpModule, NlgModule, DecisionEngineModule],
})
export class AppModule {}
