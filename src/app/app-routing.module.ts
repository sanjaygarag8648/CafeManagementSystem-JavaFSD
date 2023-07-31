import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegisterComponent} from './register/register.component'
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MenuComponent } from './menu/menu.component';
import { MerchantMenuComponent } from './merchant-menu/merchant-menu.component';
import { MerchantWelcomeComponent } from './merchant-welcome/merchant-welcome.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuccessComponent } from './success/success.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'add',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'additem',
    component:AddItemComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'mermenu',
    component:MerchantMenuComponent
  },
  {
    path:'merwel',
    component:MerchantWelcomeComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'success',
    component:SuccessComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
