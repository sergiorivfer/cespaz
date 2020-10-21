import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { FestivalesComponent } from "./pages/festivales/festivales.component";
import { AcercaComponent } from "./pages/acerca/acerca.component";
import { PazcolombiaComponent } from "./pages/pazcolombia/pazcolombia.component";
import { MemoriaComponent } from "./pages/memoria/memoria.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ComponentsComponent },
  { path: "paz-colombia", component: PazcolombiaComponent },
  { path: "memoria", component: MemoriaComponent },
  { path: "festivales", component: FestivalesComponent },
  { path: "acerca", component: AcercaComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
