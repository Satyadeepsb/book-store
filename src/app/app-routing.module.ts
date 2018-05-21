import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./modules/core/components/login/login.component";
import {PageNotFoundComponent} from "./modules/core/components/page-not-found/page-not-found.component";
import {StoreLoadGuard} from "./route-guards-resolvers/guards/store-load.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "404", component: PageNotFoundComponent },
  {
    path: "store",
    /*data: { preload: true },*/
    loadChildren: "src/app/modules/store/store.module#StoreModule",
    canLoad : [StoreLoadGuard]
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreLoadGuard]
})
export class AppRoutingModule { }
