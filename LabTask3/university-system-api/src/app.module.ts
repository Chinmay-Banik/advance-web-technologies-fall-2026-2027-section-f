import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CourseModule } from './courses/courses.module.js';
import { EnrollmentModule } from './enrollments/enrollments.module.js';
import { NotificationsModule } from './notifications/notifications.module.js';

@Module({
  imports: [CourseModule, EnrollmentModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

