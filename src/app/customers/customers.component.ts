// src/app/customers/customers.component.ts
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data; // Assuming the response is an array of customers
        this.errorMessage = null; // Reset error message on success
      },
      error: (error) => {
        this.errorMessage = 'Unable to fetch customers. Please check your token.';
        console.error('Error:', error);
        console.error('Error details:', error.error);
      },
    });
  }
}
