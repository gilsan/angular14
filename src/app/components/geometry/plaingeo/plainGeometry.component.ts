import { NgtCanvas } from "@angular-three/core";
import { NgtPlaneGeometry } from "@angular-three/core/geometries";
import { NgtMeshStandardMaterial } from "@angular-three/core/materials";
import { NgtMesh } from "@angular-three/core/meshes";
import { AfterViewInit, Component } from "@angular/core";
import { AsyncPipe, NgIf } from '@angular/common';
import { NgtTextureLoader } from "@angular-three/soba/loaders";
import { NgtVector3 } from '@angular-three/core';
import { NgtAmbientLight, NgtPointLight, NgtSpotLight } from "@angular-three/core/lights";
import { NgtSobaOrbitControls } from "@angular-three/soba/controls";
import { PlaneGeometryComponent } from "./planegeomery/planegeometry.component";
import * as THREE from 'three';
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
    PlaneGeometryComponent,
    NgtSobaOrbitControls
  ],
  providers: [NgtTextureLoader],
})
export class PlainGeometryComponent implements   AfterViewInit{
  position?: NgtVector3;
  camera!: THREE.Camera;



  ngAfterViewInit() {


  }

}
