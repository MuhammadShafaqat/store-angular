import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './actionPages/log-in/log-in.component';
import { RegisterComponent } from './actionPages/register/register.component';
import { ForgotPasswordComponent } from './actionPages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './actionPages/reset-password/reset-password.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { CategoryComponent } from './postData/category/category.component';
import { ProductComponent } from './postData/product/product.component';
import { AllProductsComponent } from './components/all-products/all-products.component';


const routes: Routes = [
  {path:'login', component:LogInComponent},
  {path:'', component:LogInComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'home', component:HomeComponent},
  {path:'products/:id', component:ProductDetailComponent},
  {path:'shoppingPage', component:ShoppingPageComponent},
  {path:'testimonials', component: TestimonialsComponent},
  {path:'category', component:CategoryComponent},
  {path:'product', component:ProductComponent},
  {path:'all-products', component:AllProductsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
