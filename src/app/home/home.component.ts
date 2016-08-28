import { Component } from '@angular/core';

@Component({
  selector: 'home',  // <home></home>
  providers: [

  ],
  directives: [

  ],
  pipes: [ ],
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class Home {


  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
