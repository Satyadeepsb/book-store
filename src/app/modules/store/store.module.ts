import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SpinnerService} from "../core/modules/spinner/spinner.service";
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {BookDataService} from "./services/book-data.service";

import { StoreRoutingModule } from './store-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    StoreRoutingModule
  ],
  declarations: [BookListComponent],
  providers : [SpinnerService, BookDataService]
})
export class StoreModule { }
