import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = new User();

  constructor() { } 

  onSubmit() {
    
      console.log(this.user);
    
  }
}
