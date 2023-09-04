import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';


@Component({
  selector: 'app-todo-list', 
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todo!:Todo;
  @Input() i!:number;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter

  deleteTodo(todo:Todo){
    this.todoDelete.emit(todo);
    console.log('Delete Todo Has Been Triggered')
  }

  onCheckboxClick(todo:any){
    this.todoCheckbox.emit(todo);
  }

}

