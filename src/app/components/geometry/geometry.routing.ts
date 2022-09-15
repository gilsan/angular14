import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EngineComponent } from "../engine/engine.component";
import { MainCubeComponent } from "./cube/maincube.component";
import { GeometryComponent } from "./geometry.component";
import { PlainGeometryComponent } from "./plaingeo/plainGeometry.component";

const routes: Routes = [
  { path: '', component: GeometryComponent ,
      children: [
          { path: 'cube', component: MainCubeComponent },
          { path: 'plane', component: PlainGeometryComponent },
          { path: 'engine', component: EngineComponent }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeometryRoutingModule { }
