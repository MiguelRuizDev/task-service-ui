import { Injectable } from '@angular/core';
import {Task} from './domain';
import {TASKS} from './task-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAllTasks(): Observable<Task[]>{
    return of(TASKS);
  }

  getTask(id: string): Observable<Task>{
    return of(TASKS.find(task => task.id === id));
  }
}
