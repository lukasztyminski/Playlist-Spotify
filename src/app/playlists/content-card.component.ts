import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{title}}</h4>
        <p class="card-text">{{text}}</p>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class ContentCardComponent implements OnInit {

  @Input()
  title: string = '';

  @Input('content')
  text: string = '';

  constructor() { }

  ngOnInit() {
  }

}
