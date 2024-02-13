import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Contact us!
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <form>
          <div class="field">
            <label class="label">Name</label>
            <input 
              type="text" 
              name="name" 
              [(ngModel)]="name" 
              class="input" 
              #nameInput="ngModel" 
              required>
            <div class="help is-error" *ngIf="nameInput.invalid %% nameInput.touched">
              Your name is required...
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <input type="text" name="email" [(ngModel)]="email"  class="input" #emailInput="ngModel" required>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              Your email is required...
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <textarea type="text" name="message" [(ngModel)]="message"  class="textarea" #messageInput="ngModel" required></textarea>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              Your message is required...
            </div>
          </div>
        
          <button class="button is-large is-warning">Send</button>
        </form>
      </div>
    </section>
  `,
  styles: [
    `
    h1 { font-family: Lato; }
     
  `,
  ],
})
export class ContactComponent implements OnInit {
  name;
  email;
  message;
  constructor() {}
  ngOnInit() {}
  submitForm() {}
}
