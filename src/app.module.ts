import { Module } from '@nestjs/common';
import { MessagingModule } from './messaging/messaging.module';
import { NlpModule } from './nlp/nlp.module';
import { NlgModule } from './nlg/nlg.module';
import { DecisionEngineModule } from './decision-engine/decision-engine.module';
import { UserModule } from './decision-services/user/user.module';

@Module({
  imports: [MessagingModule, NlpModule, NlgModule, DecisionEngineModule, UserModule],
})
export class AppModule {}
