import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";

import { CoreRoutingModule } from './core-routing.module';
import {SpinnerModule} from "./modules/spinner/spinner.module";
import {SpinnerService} from "./modules/spinner/spinner.service";
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SpinnerModule,
    CoreRoutingModule
  ],
  exports : [SpinnerModule],
  providers: [SpinnerService],
  declarations: [LoginComponent, PageNotFoundComponent]
})
export class CoreModule { }
