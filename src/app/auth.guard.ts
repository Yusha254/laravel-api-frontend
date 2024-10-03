import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('jwt'); // Retrieve the JWT token
    if (token) {
      return true; // Allow access if the token is present
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Deny access
    }
  }
}
