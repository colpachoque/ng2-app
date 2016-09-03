import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  apiUrl: string = 'http://localhost:3333/todo';

  constructor(private http:Http){

  }

  getTodoItems() :TodoItem[] {
    // return [
    //   new TodoItem(1, false, 'Item1', 'Description', 10),
    //   new TodoItem(2, true, 'Item2', 'Description', 20),
    //   new TodoItem(3, false, 'Item3', 'Description', 30)
    // ];

    return this.http.get(this.apiUrl)
      .map(res => {
        return res.json().map(i => new TodoItem(
          i.id,
          i.isDone,
          i.text,
          i.description,
          i.time
        ))
      });
  }

  addItem(item: TodoItem) {
    return this.http.post(this.apiUrl, item)
      .map(res => {
        var i = res.json();
        return new TodoItem(
          i.id,
          i.isDone,
          i.text,
          i.description,
          i.time
        );
      })
  }

  updateItem(item: TodoItem) {
    return this.http.put(this.apiUrl + item.id, item);
  }

  deleteItem(item: TodoItem) {
    return this.http.delete(this.apiUrl + item.id);
  }
}

export class TodoItem {
  constructor(
    public id: number,
    public isDone: boolean,
    public text: string,
    public description: string,
    public time: number
  ) {}
}
