import {Component} from '@angular/core';
import {TodoService, Todoitem} from './../services/todo.service';

@Component ({
  selector: 'todo-details',
  styleUrls: [
    './todo-details.css'
  ],
  template: `
    <h1>Todo Details</h1>
    <form novalidate>
      <div class="form-control">
        <label class="item-done">
          <input type="checkbox" />
          Is done
        </label>
      </div>  
        
      <div class="form-control">
        <label class="item-description">
          Description
          <textaerea required></textaerea>
        </label>
      </div>
        
        <div class="form-control">
        <label class="item-done">
          Time:
          <input type="text" required />
        </label>
      </div>
      
      <button type="submit">Save</button>
    </form>
`
})

export class TodoDetails {
  constructor(private todoService: TodoService){

  }

  ngOnInit() {

  }
}
