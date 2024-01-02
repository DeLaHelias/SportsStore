import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from 'src/app/store/store.module';

import { AppComponent } from './app.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreFirstGuard } from './store/storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { 
        path: "store",
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "cart", 
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "admin",
        loadChildren: () => import("./admin/admin.module")
          .then(m => m.AdminModule),
        canActivate: [StoreFirstGuard],
      },
      { 
        path: "**",
        redirectTo: "/store",
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
