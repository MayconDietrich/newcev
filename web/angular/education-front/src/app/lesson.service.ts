import { Injectable } from '@angular/core';

export type InstructorType = {
  avatar: string;
  fullName: string;
}

export type LessonResponsetype = {
  title: string;
  description: string;
  videoId: string;
  instructor: InstructorType;
}

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  async getLessonById(id: number): Promise<LessonResponsetype> {

    console.log('get lesson id', id);
    const response = await fetch(`https://md-newdev.herokuapp.com/lessons/${id}`);
    const data = await response.json() as LessonResponsetype;
    return data;
  }
}
