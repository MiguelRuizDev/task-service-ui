import { Component, OnInit } from '@angular/core';
import {Task} from '../domain';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks;

  constructor(private taskService : TaskService) {}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks():void {
    this.taskService.getAllTasks().subscribe(manolo => this.tasks = manolo);
  }

  createTask(title:string, description: string):void{
    if (title!="" && description!=""){
      let task = new Task(title, description)
      this.taskService.createTask(task)
        .subscribe(task => {
          this.tasks.push(task);}
      );
    }

  }

  deleteTask(task :Task):void{
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }

}
