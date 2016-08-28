import {Injectable} from '@angular/core'

@Injectable()
export class TodoService {
  getTodoItems() :TodoItem[] {
    return [
      new TodoItem(1, false, 'Item1', 'Description', 10),
      new TodoItem(2, true, 'Item2', 'Description', 20),
      new TodoItem(3, false, 'Item3', 'Description', 30)
    ];
  }
}

export class TodoItem {
  constructor(
    public id: number,
    public isDons: boolean,
    public text: string,
    public description: string,
    public time: number
  ) {}
}
