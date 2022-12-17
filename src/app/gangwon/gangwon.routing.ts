import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RestorantComponent } from "./components/restorant/restorant.component";
import { UploadComponent } from "./components/upload/upload.component";
import { GangwonComponent } from "./gangwon.component";


const routes: Routes = [
  {
    path: '', component: GangwonComponent,
      children: [
        { path: '', component: GangwonComponent },
        { path: 'upload', component: UploadComponent },
        { path: 'restorant', component: RestorantComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GangwonRoutingModule { }
