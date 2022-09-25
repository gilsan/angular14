import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Ngcomponent100Component } from "./ngcomponent100.component";


const routes: Routes = [
  { path: '', component: Ngcomponent100Component }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ngcomponent100RoutingModule { }
