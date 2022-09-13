import { NgtVector3 } from '@angular-three/core';
import { NgtBoxGeometry, NgtPlaneGeometry } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtMesh } from '@angular-three/core/meshes';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mesh } from 'three';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';


@Component({
  selector: 'app-geo',
  standalone: true,
  templateUrl: './geometry.component.html',
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
export class GeometryComponent {

  @Input() position?: NgtVector3;

  readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  constructor(private textureLoader: NgtTextureLoader) {}

  //  회전
  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

}
