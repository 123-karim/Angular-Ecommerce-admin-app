import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './products/productsdetails/productsdetails.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { CartsModule } from './carts/carts.module';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    ProductsdetailsComponent,
    ProductComponent,
    LoginComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    CartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
