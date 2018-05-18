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

  private mainUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(state: string): Observable<Task[]>{
    if(state != "any"){
      return this.http.get<Task[]>(this.mainUrl + `?state=${state}`);
    }else{
      return this.http.get<Task[]>(this.mainUrl);
    }
  }

  getTask(id: string): Observable<Task>{
    const url = this.mainUrl + `/${id}`;
    return this.http.get<Task>(url);
  }

  createTask(task : Task):Observable<Task>{
    return this.http.post<Task>(this.mainUrl, task, httpOptions);
  }

  suspendTask(task: Task): Observable<any>{
    return this.http.post(this.mainUrl + `/${task.id}/suspend`, httpOptions);
  }

  activateTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.mainUrl + `/${task.id}/activate`, httpOptions)
  }

  completeTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.mainUrl + `/${task.id}/complete`, httpOptions)
  }

  assignTask(task: Task) : Observable<Task>{
    return this.http.post<Task>(this.mainUrl + `/${task.id}/assign?user=${task.assignedUser}`, httpOptions)
  }

  releaseTask(task: Task) : Observable<Task>{
    return this.http.post<Task>(this.mainUrl + `/${task.id}/release`, httpOptions)
  }

  updateTask(task: Task):Observable<any>{
    return this.http.post(this.mainUrl + `/${task.id}`, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(this.mainUrl + `/${task.id}/delete`, httpOptions)
  }





}
