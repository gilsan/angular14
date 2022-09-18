import { NgtCanvas , NgtRenderState} from "@angular-three/core";
import { NgtBoxGeometry, NgtCapsuleGeometry, NgtCircleGeometry, NgtConeGeometry, NgtCylinderGeometry, NgtDodecahedronGeometry, NgtEdgesGeometry, NgtExtrudeGeometry, NgtIcosahedronGeometry, NgtLatheGeometry, NgtOctahedronGeometry, NgtPlaneGeometry, NgtPolyhedronGeometry, NgtRingGeometry, NgtSphereGeometry, NgtTetrahedronGeometry, NgtTorusGeometry, NgtTorusKnotGeometry, NgtTubeGeometry, NgtWireframeGeometry } from "@angular-three/core/geometries";
import { NgtMeshBasicMaterial, NgtMeshLambertMaterial, NgtMeshMatcapMaterial, NgtMeshNormalMaterial, NgtMeshPhongMaterial, NgtMeshPhysicalMaterial, NgtMeshStandardMaterial, NgtShaderMaterial } from "@angular-three/core/materials";
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
import { BoxComponent } from "../../geometrytype/box/box.component";
import { SphereComponent } from "../../geometrytype/sphere/sphere.component";
import { IcosaHedronComponent } from "../../geometrytype/icosahedron/icosahedron.component";
import { TorusKnotComponent } from "../../geometrytype/torusknot/torusknot.component";
import { NgtGroup } from '@angular-three/core/group';
import { PlaneComponent } from "../../geometrytype/plane/plane.component";
import { LambertComponent } from "../../materialtype/lambertMaterial/lambert.component";
import { PhongComponent } from "../../materialtype/phongMaterial/phong.component";
import { NormalComponent } from "../../materialtype/normal/normal.component";
import { PhysicalComponent } from "../../materialtype/physical/physical.component";


@Component({
  selector: 'my-plaingeo',
  standalone: true,
  templateUrl: './materialmap.component.html',
  styleUrls: ['./materialmap.component.scss'],
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
    NgtMeshBasicMaterial,
    NgtMeshNormalMaterial,
    NgtMeshLambertMaterial,
    NgtMeshPhongMaterial,
    NgtMeshStandardMaterial,
    NgtMeshPhysicalMaterial,
    NgtMeshMatcapMaterial,
    AsyncPipe,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BoxComponent,
    SphereComponent,
    IcosaHedronComponent,
    TorusKnotComponent,
    PlaneComponent,
    TorusKnotComponent,
    LambertComponent,
    PhongComponent,
    NormalComponent,
    PhysicalComponent,

  ],
  providers: [NgtTextureLoader],
})
export class MaterialMapComponent implements OnInit   {

 fog = new THREE.FogExp2(0xcccccc, 0.002);
 background = new THREE.Color(0xcccccc);
 texture ='19.jpg';

//  readonly texture$ = this.textureLoader.load(this.texture);
//  constructor(private textureLoader: NgtTextureLoader) {}


  ngOnInit(): void {

  }

  onCubeBeforeRender($event: { state: NgtRenderState; object: THREE.Mesh }) {
    const cube = $event.object;
    // we are rotating our cube little by little before it gets rendered
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }




}
