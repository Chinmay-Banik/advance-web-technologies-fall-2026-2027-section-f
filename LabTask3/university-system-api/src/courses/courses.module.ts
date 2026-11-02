import { Module } from '@nestjs/common';
import { CourseController } from './courses.controller.js';
import { CourseService } from './courses.service.js';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}