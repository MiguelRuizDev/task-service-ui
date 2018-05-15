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

  private mainUrl = 'http://localhost:8080/tasks/mock';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.mainUrl);
  }

  getTask(id: string): Observable<Task>{
    const url = this.mainUrl + `/${id}`;
    return this.http.get<Task>(url);
  }

  updateTask(task: Task):Observable<any>{
    const id = task.id;
    return this.http.post(this.mainUrl + `/${id}`, task, httpOptions);
  }

  createTask(task : Task):Observable<Task>{
    return this.http.post<Task>(this.mainUrl, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task>{
    const id = task.id;
    return this.http.delete<Task>(this.mainUrl + `/${id}/delete`, httpOptions)
  }


}
