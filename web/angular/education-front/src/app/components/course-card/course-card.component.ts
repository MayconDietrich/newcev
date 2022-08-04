import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseResponseType, CourseService, CourseType } from 'src/app/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Output() getCourseEvent: EventEmitter<any> = new EventEmitter();
  @Input() courseId?: number;
  @Input() title?: string;
  @Input() courses?: string;
  @Input() description?: string;

  courseService: CourseService;
  course?: CourseType;
  constructor(courseService: CourseService) {
    this.courseService = courseService;
    this.course = {} as CourseResponseType;
  }

  async ngOnInit(): Promise<void> {
    this.course = await this.courseService.getAllCourses();
    this.getCourseEvent.emit(this.course);
    console.log('fsdkljjfbdipsafbl: ')
  }



}
