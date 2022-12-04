import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DjangoComponent } from "./django.component";


const routes: Routes = [
  {
    path: '', component: DjangoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DjangoRoutingModule { }
