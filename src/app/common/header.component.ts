import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">
    <div class="navbar-brand">
        <a class="navbar-item"> logo goes here </a>
      </div>
    </div>`,
  styles: [],
})
export class HeaderComponent implements OnInit {
  construtor() {}
  ngOnInit() {}
}
