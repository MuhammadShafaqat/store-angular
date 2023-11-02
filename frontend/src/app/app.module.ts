import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './actionPages/log-in/log-in.component';
import { RegisterComponent } from './actionPages/register/register.component';
import { ForgotPasswordComponent } from './actionPages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './actionPages/reset-password/reset-password.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CategoryComponent } from './postData/category/category.component';
import { PropertyComponent } from './postData/property/property.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent,
    ShoppingPageComponent,
    TestimonialsComponent,
    AllProductsComponent,
    CategoryComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
