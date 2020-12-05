import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { map } from 'rxjs/operators';
import { TodoCardService } from './todo-card.service';



@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
})
export class TodoCardComponent implements OnInit {
  @Input() lang: string;

  tasks: Task[] = [];
  addTaskFlag = false;

  constructor(private todoCardService: TodoCardService) { }
  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.todoCardService.fetchTasks().subscribe(data => {
      this.tasks = data;
    })
  }

  onAddTask(task: HTMLInputElement) {
    this.todoCardService.addTask(task.value, false).subscribe(data => {
      this.fetchTasks();
      this.addTaskFlag = false;
    })
  }

  onDeleteTask(taskID: string) {
    this.todoCardService.deleteTask(taskID).subscribe(data => {
        this.fetchTasks();
      })
  }

  onEditTask(taskID: string, name: string, complete: boolean) {
    this.todoCardService.editTask(taskID, name, complete).subscribe(data => {
      this.fetchTasks();
    })
  }

  onSelectTask(taskID: string) {
    this.todoCardService.checkTask(taskID).subscribe(data => {
        this.fetchTasks();
      })
  }


}
