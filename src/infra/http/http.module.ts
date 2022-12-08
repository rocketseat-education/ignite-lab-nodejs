import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infra/database/database.module';

import { SendNotification } from '../../application/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
