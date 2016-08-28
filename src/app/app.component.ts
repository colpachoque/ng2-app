import { Component, ViewEncapsulation } from '@angular/core';
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app',

  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <header><h1> TODO app</h1></header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
        Footer foo
    </footer>
  `,
  providers: [
    TodoService
  ]
})
export class App {

  ngOnInit() {

  }
}
