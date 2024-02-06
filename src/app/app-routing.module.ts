import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
 import { PagesComponent } from './pages/pages.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleSidebarComponent } from './blog-single-sidebar/blog-single-sidebar.component';

import { HOMEComponent } from './home/home.component';
import { ContacutComponent } from './contacut/contacut.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
{path:"",component: HOMEComponent},
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:"ShopGrid" , component:ShopGridComponent},
  {path:" Blog" , component: BlogComponent},
  {path:" Pages" , component: PagesComponent},
  {path:"BlogSingleSidebar" , component:BlogSingleSidebarComponent}, 
{path:"Checkout",component:CheckoutComponent},
 {path:"Contacut",component: ContacutComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
