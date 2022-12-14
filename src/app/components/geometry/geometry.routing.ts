import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EngineComponent } from "../engine/engine.component";
import { MainCubeComponent } from "./cube/maincube.component";
import { GeometryComponent } from "./geometry.component";
import { LightComponent } from "./lights/light.component";
import { MaterialMapComponent } from "./material/map/materialmap.component";
import { NormalComponent } from "./material/normal/normal.component";
import { OrbitComponent } from "./orbit/orbit.component";
import { PlainGeometryComponent } from "./plaingeo/plainGeometry.component";

const routes: Routes = [
  { path: '', component: GeometryComponent ,
      children: [
          { path: 'cube', component: MainCubeComponent },
          { path: 'plane', component: PlainGeometryComponent },
          { path: 'engine', component: EngineComponent },
          { path: 'orbit', component: OrbitComponent },
          { path: 'normal', component: NormalComponent},
          { path: 'map', component: MaterialMapComponent},
          { path: 'light', component: LightComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeometryRoutingModule { }
