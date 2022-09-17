import { NgtCanvas , NgtRenderState} from "@angular-three/core";
import { NgtBoxGeometry, NgtCapsuleGeometry, NgtCircleGeometry, NgtConeGeometry, NgtCylinderGeometry, NgtDodecahedronGeometry, NgtEdgesGeometry, NgtExtrudeGeometry, NgtIcosahedronGeometry, NgtLatheGeometry, NgtOctahedronGeometry, NgtPlaneGeometry, NgtPolyhedronGeometry, NgtRingGeometry, NgtSphereGeometry, NgtTetrahedronGeometry, NgtTorusGeometry, NgtTorusKnotGeometry, NgtTubeGeometry, NgtWireframeGeometry } from "@angular-three/core/geometries";
import { NgtMeshBasicMaterial, NgtMeshPhongMaterial, NgtMeshStandardMaterial, NgtShaderMaterial } from "@angular-three/core/materials";
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
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  imports: [
    NgtCanvas,
    NgtAmbientLight,
    NgtDirectionalLight,
    NgtPointLight,
    NgtSpotLight,
    NgtSobaOrbitControls,
    NgtMesh,
    NgtBoxGeometry,
    NgtCapsuleGeometry,
    NgtCircleGeometry,
    NgtConeGeometry,
    NgtCylinderGeometry,
    NgtDodecahedronGeometry,
    NgtEdgesGeometry,
    NgtExtrudeGeometry,
    NgtIcosahedronGeometry,
    NgtLatheGeometry,
    NgtOctahedronGeometry,
    NgtPlaneGeometry,
    NgtPolyhedronGeometry,
    NgtRingGeometry,
    NgtShaderMaterial,
    NgtSphereGeometry,
    NgtTetrahedronGeometry,
    NgtTorusGeometry,
    NgtTorusKnotGeometry,
    NgtTubeGeometry,
    NgtWireframeGeometry,
    NgtMeshStandardMaterial,
    NgtMeshBasicMaterial,
    NgtMeshPhongMaterial,
    AsyncPipe,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  providers: [NgtTextureLoader],
})
export class OrbitComponent implements OnInit   {

 fog = new THREE.FogExp2(0xcccccc, 0.002);
 background = new THREE.Color(0xcccccc)


  ngOnInit(): void {

  }

  onCubeBeforeRender($event: { state: NgtRenderState; object: THREE.Mesh }) {
    const cube = $event.object;
    // we are rotating our cube little by little before it gets rendered
    cube.rotation.x += 0.01;
  }




}
