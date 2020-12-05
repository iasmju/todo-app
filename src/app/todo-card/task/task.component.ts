import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() checkTask = new EventEmitter<boolean>();
  @Output() deleteTask = new EventEmitter<void>();
  @Output() editTask = new EventEmitter<string>();


  isEditTask = false;
  showDelete = false;

  constructor() { }
  ngOnInit(): void { }

  onSelectTask(task: Task) {
    if (!task.complete) {
      this.playAudio();
      this.checkTask.emit(true);
    }
    else {
      this.checkTask.emit(false);
    }
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/Tick-DeepFrozenApps-397275646.mp3";
    audio.load();
    audio.play();
  }

  onDeleteTask() {
    this.deleteTask.emit();
  }

  onEditTask(taskName: HTMLInputElement) {
    this.editTask.emit(taskName.value);
    this.isEditTask = false;
    this.task.complete = true
  }

}
