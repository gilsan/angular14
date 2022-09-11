import { NgtCanvas } from "@angular-three/core";
import { NgtPlaneGeometry } from "@angular-three/core/geometries";
import { NgtMeshStandardMaterial } from "@angular-three/core/materials";
import { NgtMesh } from "@angular-three/core/meshes";
import { Component } from "@angular/core";
import { AsyncPipe, NgIf } from '@angular/common';
import { NgtTextureLoader } from "@angular-three/soba/loaders";
import { NgtVector3 } from '@angular-three/core';
import { NgtAmbientLight, NgtPointLight, NgtSpotLight } from "@angular-three/core/lights";
import { CubeComponent } from "../cube/cube.component";
import { NgtSobaOrbitControls } from "@angular-three/soba/controls";

@Component({
  selector: 'my-plaingeo',
  standalone: true,
  templateUrl: './plainGeometry.component.html',
  styleUrls: ['./plainGeometry.component.scss'],
  imports: [
    NgtCanvas,
    NgtMesh, NgtMeshStandardMaterial, NgtPlaneGeometry,
    AsyncPipe,
    NgtAmbientLight,
    NgtPointLight,
    NgtSpotLight,
    CubeComponent,
    NgtSobaOrbitControls
  ],
  providers: [NgtTextureLoader],
})
export class PlainGeometryComponent {
  position?: NgtVector3;
  // readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  // constructor(private texture: NgtTextureLoader) {}


}
