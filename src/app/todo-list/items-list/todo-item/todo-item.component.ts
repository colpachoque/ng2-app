import {Component, EventEmitter} from '@angular/core';
import {TodoService, TodoItem} from "../../../services/todo.service";

@Component({
  selector: 'todo-item',
  template: ` 
     <div class="item">
          <input type="checkbox" [checked]="item.isDone" (click)="toggle.emit(item)"/>
          
          <a class="item-text" href="#/details" [class.done-item]="item.isDone">
            {{item.text}}
          </a>
          
          <button class="item-del" (click)="delete.emit(item)">X</button>
      </div>`,
  inputs: ['item'],
  outputs: ['toggle', 'delete']
})

export class TodoItemComponent {
  items: TodoItem;
  toggle: EventEmitter<TodoItem> = new EventEmitter();
  delete: EventEmitter<TodoItem> = new EventEmitter();

}
