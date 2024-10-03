// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Ensure AppComponent is imported as standalone
import { LoginComponent } from './login/login.component'; // Ensure LoginComponent is imported as standalone
import { CommonModule } from '@angular/common'; // Import CommonModule here

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    CommonModule, // Add CommonModule here
  ],
  bootstrap: [], // No need to bootstrap the component here, it's handled differently with standalone components
})
export class AppModule { }
