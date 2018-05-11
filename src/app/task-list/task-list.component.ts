import { Component, OnInit } from '@angular/core';
import {Task} from '../domain';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  amigos;

  constructor(private taskService : TaskService) {}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks():void {
    this.taskService.getAllTasks().subscribe(manolo => this.amigos = manolo);
  }

  createTask(title:string):void{
    title = title.trim();
    if (!title) { 
      return; 
    }else{
      this.taskService.createTask({title} as Task)
        .subscribe(task => {
          this.amigos.push(task);}
      );
    }
  }

  deleteTask(task :Task):void{
    this.amigos = this.amigos.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }

}
