import { Component, ViewEncapsulation } from '@angular/core';

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
  `
})
export class App {

  ngOnInit() {

  }
}
