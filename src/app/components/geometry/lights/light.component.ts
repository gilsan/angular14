import { NgtCanvas } from "@angular-three/core";
import { NgtAmbientLight, NgtDirectionalLight, NgtPointLight, NgtSpotLight } from "@angular-three/core/lights";
import { NgtMesh } from "@angular-three/core/meshes";
import { NgtSobaOrbitControls } from "@angular-three/soba/controls";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TorusComponent } from "../geometrytype/torus/torus.component";
import { BasicComponent } from "../materialtype/basic/basic.component";
import { LambertComponent } from "../materialtype/lambertMaterial/lambert.component";
import { PhongComponent } from "../materialtype/phongMaterial/phong.component";
import { PhysicalComponent } from "../materialtype/physical/physical.component";
import { ToonComponent } from "../materialtype/toon/toon.component";


@Component({
  selector: 'my-plaingeo',
  standalone: true,
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgtCanvas,
    NgtAmbientLight,
    NgtDirectionalLight,
    NgtPointLight,
    NgtSpotLight,
    NgtSobaOrbitControls,
    NgtMesh,
    TorusComponent,
    BasicComponent,
    LambertComponent,
    PhongComponent,
    PhysicalComponent,
    ToonComponent
  ]
})
export class LightComponent implements OnInit {

  texture ='assets/texture/grid.png';// grid.png worldColour.5400x2700.jpg

  ngOnInit(): void {

  }

}
