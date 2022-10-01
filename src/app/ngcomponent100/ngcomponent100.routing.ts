import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Ngcomponent100Component } from "./ngcomponent100.component";


const routes: Routes = [
  { path: '', component: Ngcomponent100Component,
        children: [
          {
            path: 'components',
            loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule),
          },
          {
            path: 'pipes',
            loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule),
          },
        ]
  },



];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ngcomponent100RoutingModule { }
