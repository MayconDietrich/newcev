import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LessonType } from 'src/app/course.service';
import { LessonResponsetype, LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Output() getLessonEvent: EventEmitter<any> = new EventEmitter();
  @Input() lessonId?: number;
  @Input() title?: string;

  lessonService: LessonService;
  lesson?: LessonType;
  constructor(lessonService: LessonService) {
    this.lessonService = lessonService;
    this.lesson = {} as LessonResponsetype;
  }

  ngOnInit(): void {
  }

  async onClickLesson(id: any) {
    this.lesson = await this.lessonService.getLessonById(id);
    this.getLessonEvent.emit(this.lesson);
  }

}
