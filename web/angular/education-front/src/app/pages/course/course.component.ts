import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseService: CourseService;//atributo da class
  course: CourseResponseType;
  lessonToShow: any;

  constructor(courseService: CourseService) { //parâmetro do contructor
    this.courseService = courseService;
    this.course = {} as CourseResponseType;
  }

  async ngOnInit(): Promise<void> {
    this.course = await this.courseService.getCourseById(1);
  };

  async setlessonToShow(lesson: any) {
    this.lessonToShow = lesson;
  }
};