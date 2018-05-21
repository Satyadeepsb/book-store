import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {TableComponent} from "./components/table-component/table.component";
import {InitCapPipe} from "./pipes/init-cap.pipe";

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedRoutingModule
  ],
  declarations: [TableComponent, InitCapPipe],
  exports: [TableComponent, InitCapPipe],
  providers: [DatePipe, InitCapPipe]
})
export class SharedModule { }
