import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoursesService } from './courses.service.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAllCourses() {
    return 'hi';
  }

  @Post('create_course')
  CreateCourse(@Body() course: CreateCourseDto) {
    console.log(course.name);
    console.log(course.code);
    console.log(course.instructor);
    console.log(course.credits);
    console.log(course.description);

    return {
      message: 'Course successfully created',
      data: course,
    };
  }
}
