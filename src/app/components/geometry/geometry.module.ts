
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GeometryComponent } from "./geometry.component";
import { GeometryRoutingModule } from "./geometry.routing";


@NgModule({
  declarations: [
    GeometryComponent

  ],
  imports: [
    CommonModule,
    GeometryRoutingModule
  ]
})
export class GeometryModule {}
