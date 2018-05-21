import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Task} from '../domain';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService }  from '../task.service';
import { toString } from 'typescript-collections/dist/lib/arrays';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() 
  task: Task;

  constructor(
    private taskService: TaskService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
      .subscribe(data => this.task = data);
  }

  suspend(): void {
    this.taskService.suspendTask(this.task).subscribe(
      () => this.getTask(),
    );
  }

  activate(): void {
    this.taskService.activateTask(this.task).subscribe(
      () => this.getTask(),
    );
  }

  complete(): void {
    this.taskService.completeTask(this.task).subscribe(
      () => this.getTask(),
    );
  }

  assign(): void {
    this.taskService.assignTask(this.task).subscribe(
      () => this.getTask(),
    );
  }

  release(): void {
    this.taskService.releaseTask(this.task).subscribe(
      () => this.getTask(),
    );
  }

  save(): void {
    this.taskService.updateTask(this.task).subscribe();
  }

  goBack(): void {
    this.location.back();
  }



}
