import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: 'geometry',
    loadChildren: () => import('./components/geometry/geometry.module').then((m) => m.GeometryModule),
  },
  {
    path: 'component100',
    loadChildren: () => import('./ngcomponent100/ngcomponent100.module').then((m) => m.Ngcomponent100Module),
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
