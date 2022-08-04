import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(courseService: CourseService, private route: ActivatedRoute) { //parâmetro do contructor
    this.courseService = courseService;
    this.course = {} as CourseResponseType;
  }

  async ngOnInit(): Promise<void> {
    const params = this.route.snapshot.params;
    const courseId = params['courseId'];
    console.log(courseId);

    this.course = await this.courseService.getCourseById(courseId);
  };

  async setlessonToShow(lesson: any) {
    this.lessonToShow = lesson;
  }
};