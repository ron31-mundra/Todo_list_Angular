import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  sno!:number;
  title!:string;
  desc!:string;
  active!:boolean;
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter


  onSubmit(){
    const todo={
      sno:this.sno,
      title:this.title,
      desc: this.desc,
      active:this.active
    }
    this.todoAdd.emit(todo);

    console.log(todo)

  }

}
