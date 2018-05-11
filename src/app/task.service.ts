import { Injectable } from '@angular/core';
import {Task} from './domain';
import { Observable} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private mainUrl = 'api/tasks'; //attention to the api in the route

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.mainUrl);
  }

  getTask(id: number): Observable<Task>{
    const url = `${this.mainUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  updateTask(task: Task):Observable<any>{
    return this.http.put(this.mainUrl, task, httpOptions);
  }

  createTask(task : Task):Observable<Task>{
    return this.http.post<Task>(this.mainUrl, task, httpOptions);
  }
  deleteTask(task: Task): Observable<Task>{
    const id = task.id;
    const url = `${this.mainUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions)
  }


}
