import {Component} from '@angular/core';
import {TodoService, TodoItem} from './../services/todo.service';
import {FilterEnum} from './filter-enum';
import {AddItemComponent} from './add-item/add-item.component.ts';
import {FiltersComponent} from './filters/filters.component';
import {ItemsListComponent} from './items-list/items-list.component.ts';

@Component({
  selector: 'todo-list',  // <home></home>
  styleUrls: [
    './todo-list.css'
  ],
  templateUrl: `
    <h1>Todo List</h1>
    
    <div class="clock">{{time | date: 'HH:mm:ss'}}</div>
    
    <filters [filter]="filter" (change)="setFilter($event)"></filters>
    
    <add-item [itemName]="itemName" (addItem)="addItem($event)"></add-item>
    
    <items-list [items]="getFilteredItems()"
        (toggle)="toggleItem($event)"
        (delete)="deleteItem($event)"></items-list>
`,
  directives: [AddItemComponent, FiltersComponent, ItemsListComponent]
})

export class TodoList {
  time: Date;
  items: TodoItem[] = [];
  itemName: string = 'New Todo Item';
  filter: FilterEnum = FilterEnum.All;
  FilterEnum: any = FilterEnum;

  constructor(private todoService:TodoService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    this.items = this.todoService.getTodoItems();

    setInterval(() => {
      this.time = new Date();
    }, 1000)
  }

  addItem(text: string) {
    this.items.push(new TodoItem(null, false, text, '', null))
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
