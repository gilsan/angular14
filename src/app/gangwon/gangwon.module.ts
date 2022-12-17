import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { GangwonRoutingModule } from "./gangwon.routing";
import { UploadComponent } from "./components/upload/upload.component";
import { GangwonComponent } from "./gangwon.component";
import { RestorantComponent } from "./components/restorant/restorant.component";


@NgModule({
  declarations: [
    GangwonComponent,
    UploadComponent,
    RestorantComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GangwonRoutingModule
  ]
})
export class GangwonModule {}
