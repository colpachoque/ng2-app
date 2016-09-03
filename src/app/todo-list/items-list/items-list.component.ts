import { Component, EventEmitter } from '@angular/core';
import {TodoService, TodoItem} from "../../services/todo.service";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {LengthPipe} from '../../pipes/length.pipe';


@Component({
  selector: 'items-list',
  templateUrl: './items-list.html',
  styleUrls: [
    './items-list.css'
  ],
  inputs: ['items'],
  outputs: ['toggle', 'delete'],
  directives: [TodoItemComponent],
  pipes: [LengthPipe]
})

export class ItemsListComponent {
  items: TodoItem[];
  toggle: EventEmitter<TodoItem> = new EventEmitter();
  delete: EventEmitter<TodoItem> = new EventEmitter();

}
