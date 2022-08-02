import { Component, Input, OnInit } from '@angular/core';
import { LessonType } from 'src/app/course.service';
import { LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lessonId?: number;
  @Input() title?: string;

  lessonService: LessonService;
  lesson?: LessonType;
  constructor(lessonService: LessonService) {
    this.lessonService = lessonService;
    this.lesson = LessonResponsetype
  }

  ngOnInit(): void {
  }

  async onClickLesson(id: any) {
    this.lesson = await lessonService.getLessonById(id);
  }

}
