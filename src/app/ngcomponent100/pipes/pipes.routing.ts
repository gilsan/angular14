import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PipeComponent } from "./pipe-document/pipe.component";



const routes: Routes = [
  { path: '', component:  PipeComponent },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
