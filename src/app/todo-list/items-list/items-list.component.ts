import { Component, EventEmitter } from '@angular/core';
import {TodoService, TodoItem} from "../../services/todo.service";
import {TodoItemComponent} from "./todo-item/todo-item.component";



@Component({
  selector: 'items-list',
  templateUrl: './items-list.html',
  styleUrls: [
    './items-list.css'
  ],
  inputs: ['items'],
  outputs: ['toggle', 'delete'],
  directives: [TodoItemComponent]
})

export class ItemsListComponent {
  items: TodoItem[];
  toggle: EventEmitter<TodoItem> = new EventEmitter();
  delete: EventEmitter<TodoItem> = new EventEmitter();

}
