import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() populateCourseEvent: EventEmitter<any> = new EventEmitter();
  @Input() courses?: any;
  @Input() course?: any;
  @Input() courseService?: CourseService;

  constructor(courseService: CourseService) {
    this.courseService = courseService;
    this.course = {} as CourseResponseType;
  }

  async ngOnInit(): Promise<void> {
    this.courses = await this.courseService?.getAllCourses();
    console.log(this.courses);
    console.log('cursos: ', this.courses);
  }

  populateCourse(course: any) {
    console.log('populate course', course);
    this.populateCourseEvent.emit(course);
  }
}