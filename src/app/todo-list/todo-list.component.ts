import { Component } from '@angular/core';
import {TodoService, TodoItem} from './../services/todo.service';
import {FilterEnum} from './filter-enum'

@Component({
  selector: 'todo-list',  // <home></home>
  styleUrls: [
    './todo-list.css'
  ],
  templateUrl: `
    <h1>Todo List</h1>
    
    <div class="clock">{{time}}</div>
    
    <div class="filters">
      <button [class.active]="filter == FilterEnum.All" (click)="setFilter(FilterEnum.All)">All</button>
      <button [ngClass]="{'active': filter == FilterEnum.Done}" (click)="setFilter(FilterEnum.Done)">Done</button>
      <button [ngClass]="{'active': filter == FilterEnum.Undone}" (click)="setFilter(FilterEnum.Undone)">Undone</button>
    </div>
    
    <div class="add-item">
      <input type="text" [(ngModel)]="itemName" (keydown.enter)="addItem(itemName)"/>
        <button (click)="addItem(itemName)" [disabled]="!itemName">Add</button>
    </div>
    
    <div class="statistics">Count: {{items.length}}</div>
    
    <div class="items">
    <div class="item" *ngFor="let item of getFilteredItems()">
      <input type="checkbox" [checked]="item.isDone" (click)="toggleItem(item)"/>
        <a class="item-text" href="#/details" [class.done-item]="item.isDone">
          {{item.text}}
        </a>
      <button class="item-del" (click)="deleteItem(item)">X</button>
    </div>
`
})

export class TodoList {
  time: string;
  items: TodoItem[] = [];
  itemName: string = 'New Item';
  filter: FilterEnum = FilterEnum.All;
  FilterEnum: any = FilterEnum;

  constructor(private todoService:TodoService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    this.items = this.todoService.getTodoItems();

    setInterval(() => {
      this.time = new Date().getSeconds().toString();
    }, 1000)
  }

  addItem(text: string) {
    if (text) {
      this.items.push(new TodoItem(null, false, text, '', null))
      this.itemName = '';
    }
  }

  deleteItem(item: TodoItem) {
    this.items = this.items.filter(i => i !== item);
  }

  toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }

  setFilter(filter:FilterEnum) {
    this.filter = filter;
  }

  getFilteredItems() {
    return this.items.filter(item => {
      return this.filter == FilterEnum.All
        || item.isDone && this.filter == FilterEnum.Done
        || !item.isDone && this.filter == FilterEnum.Undone;
    });
  }
}
