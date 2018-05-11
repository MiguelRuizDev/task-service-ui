import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../domain';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService }  from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() asdf: Task;

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
      .subscribe(hero => this.asdf = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
