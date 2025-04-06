import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('/api/auth/login', { username: this.username, password: this.password }).subscribe(
      response => {
        alert('Login successful');
        this.router.navigate(['/members']);
      },
      error => {
        alert('Invalid credentials');
      }
    );
  }
}