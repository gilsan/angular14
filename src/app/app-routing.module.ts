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
  {
    path: 'django',
    loadChildren: () => import('./django/django.module').then((m) => m.DjangoModule),
  },
  {
    path: 'gangwon',
    loadChildren: () => import('./gangwon/gangwon.module').then((m) => m.GangwonModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
