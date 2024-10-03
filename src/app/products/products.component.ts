import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Fetched products:', data);
        this.products = data;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = 'Could not load products.';
        console.error(error);
      },
    });
  }
}
