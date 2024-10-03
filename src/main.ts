// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/login/login.component';
import { ProductsComponent } from './app/products/products.component'; // Import the new component
import { HomeComponent } from './app/home/home.component';
import { CustomersComponent } from './app/customers/customers.component';
import { AuthGuard } from '../src/app/auth.guard';

// Define your routes
const routes: Route[] = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent }, // Products route
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the router
    provideHttpClient(),   // Provide HttpClient
  ],
}).catch(err => console.error(err));
