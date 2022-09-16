import { NgtCanvas } from "@angular-three/core";
import { NgtCylinderGeometry, NgtPlaneGeometry } from "@angular-three/core/geometries";
import { NgtMeshPhongMaterial, NgtMeshStandardMaterial } from "@angular-three/core/materials";
import { NgtMesh } from "@angular-three/core/meshes";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { NgtTextureLoader } from "@angular-three/soba/loaders";
import { NgtVector3 } from '@angular-three/core';
import { NgtAmbientLight, NgtDirectionalLight, NgtPointLight, NgtSpotLight } from "@angular-three/core/lights";
import { NgtSobaOrbitControls } from "@angular-three/soba/controls";
import { OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'my-plaingeo',
  standalone: true,
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss'],
  imports: [
    NgtCanvas,
    NgtMesh,
    NgtMeshStandardMaterial,
    NgtPlaneGeometry,
    AsyncPipe,
    NgtAmbientLight,
    NgtDirectionalLight,
    NgtPointLight,
    NgtSpotLight,
    NgtSobaOrbitControls,
    NgtCylinderGeometry,
    NgtMeshPhongMaterial,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  providers: [NgtTextureLoader],
})
export class OrbitComponent implements OnInit   {

 fog = new THREE.FogExp2(0xcccccc, 0.002);
 background = new THREE.Color(0xcccccc)
  amount = Array.from({length: 500}).fill(undefined).map(() => {
      return { x: this.getRandomPosition(), y: 0, z: this.getRandomPosition()}
  });


 @ViewChild('orbit') orbit?: NgtSobaOrbitControls;

  ngOnInit(): void {

  }

  private getRandomPosition() {
    return Math.random() * 1600 - 1300;
  }








}
