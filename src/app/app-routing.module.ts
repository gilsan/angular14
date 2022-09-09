import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCubeComponent } from './components/cube/maincube.component';

const routes: Routes = [
  { path: "cube", component: MainCubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
