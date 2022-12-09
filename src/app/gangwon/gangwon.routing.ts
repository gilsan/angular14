import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadComponent } from "./components/upload/upload.component";
import { GangwonComponent } from "./gangwon.component";


const routes: Routes = [
  {
    path: '', component: GangwonComponent,
      children: [
        { path: '', component: GangwonComponent },
        { path: 'upload', component: UploadComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GangwonRoutingModule { }
