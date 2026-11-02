import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../courses/courses.service.js';
import { NotificationService } from '../notifications/notifications.service.js';

@Injectable()
export class EnrollmentService {
  constructor(
    private courseService: CourseService,

    @Inject(forwardRef(() => NotificationService))
    private notificationService: any,
  ) {}

  getEnrollments() {
    return {
      message: 'All enrollments fetched',
      data: [],
    };
  }

 enrollStudent(studentName: string, courseId: string) {
  const course = this.courseService.getCourseById(courseId);

  const notification = this.notificationService.sendNotification(
    studentName,
    'Your enrollment was successful!',
  );

  return {
    message: 'Student enrolled successfully',
    student: studentName,
    course,
    notification,
  };
  }
}