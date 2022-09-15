import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { NgtBoxGeometry, NgtPlaneGeometry } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtMesh } from '@angular-three/core/meshes';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { Mesh } from 'three';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';
import * as THREE from 'three';


@Component({
  selector: 'app-planegeometry',
  standalone: true,
  templateUrl: './planegeometry.component.html',
  imports: [
    NgtMesh,
    NgtMeshStandardMaterial,
    NgtBoxGeometry,
    NgtPlaneGeometry,
    NgtSobaOrbitControls,
    AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class PlaneGeometryComponent implements   AfterViewInit {

  planeGeometry!: THREE.PlaneGeometry;
  count = 0;
  @ViewChild('material') material?: NgtMeshStandardMaterial;
  @ViewChild('planegeo') planegeo?: NgtPlaneGeometry;
  @Input() position?: NgtVector3;

  scene!: THREE.Scene;
  mesh!: THREE.Mesh;

  hovered = false;
  active = false;

  clock = new THREE.Clock();

  readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  constructor(private textureLoader: NgtTextureLoader) {}

  ngAfterViewInit(): void {

  }

  meshinfo(e: Event) {
    console.log(e);
  }

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
    this.count = this.planeGeometry.attributes['position'].count;
    const time = this.clock.getElapsedTime();
    for(let i =0; i <this.count; i++) {
      const x = this.planeGeometry.attributes['position'].getX(i);
      const y = this.planeGeometry.attributes['position'].getY(i);
      // animations
      const anim1 =  0.75 * Math.sin(x * 2 + time * 0.7);
      const anim2 =  0.25 * Math.sin(x + time * 0.7);

      this.planeGeometry.attributes['position'].setZ(i, anim1 + anim2);
      this.planeGeometry.computeVertexNormals();
      this.planeGeometry.attributes['position'].needsUpdate = true
    }
  }




}
