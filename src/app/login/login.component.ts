import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<{ token: string }>('http://127.0.0.1:8000/api/login', { email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          localStorage.setItem('jwt', response.token); // Store JWT token in local storage
          this.successMessage = 'Login successful!';
          this.errorMessage = null;
          this.router.navigate(['/']); // Redirect or navigate to a different page
        },
        error: (error) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          this.successMessage = null;
        }
      });
    }
}
