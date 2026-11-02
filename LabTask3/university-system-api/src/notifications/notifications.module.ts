import { Module, forwardRef } from '@nestjs/common';
import { NotificationController } from './notifications.controller.js';
import { NotificationService } from './notifications.service.js';
import { EnrollmentModule } from '../enrollments/enrollments.module.js';

@Module({
  imports: [forwardRef(() => EnrollmentModule)],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationsModule {}