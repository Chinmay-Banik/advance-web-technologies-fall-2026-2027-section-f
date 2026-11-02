import { Module, forwardRef } from '@nestjs/common';
import { EnrollmentController } from './enrollments.controller.js';
import { EnrollmentService } from './enrollments.service.js';
import { CourseModule } from '../courses/courses.module.js';
import { NotificationsModule } from '../notifications/notifications.module.js';

@Module({
  imports: [
    CourseModule,
    forwardRef(() => NotificationsModule),
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}