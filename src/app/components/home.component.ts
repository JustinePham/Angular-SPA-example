import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Primary hero
          </p>
          <p class="subtitle">
            this is the home page
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    h1 { font-family: Lato; }
    .hero {
      background-image: url("https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") !important;
      background-size: cover;
      background-position: center center;
    }
     
  `,
  ],
})
export class HomeComponent {}
