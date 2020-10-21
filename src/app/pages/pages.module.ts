import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app.routing";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';

import { FestivalesComponent } from "./festivales/festivales.component";
import { AcercaComponent } from "./acerca/acerca.component";
import { PazcolombiaComponent } from "./pazcolombia/pazcolombia.component";
import { MemoriaComponent } from "./memoria/memoria.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule
  ],
  declarations: [
    FestivalesComponent,
    AcercaComponent,
    PazcolombiaComponent,
    MemoriaComponent,
  ],
})
export class PagesModule {}
