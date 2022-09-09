import { NgtVector3 } from '@angular-three/core';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtMesh } from '@angular-three/core/meshes';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mesh } from 'three';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtSobaLoader, NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cube',
  standalone: true,
  templateUrl: './cube.component.html',
  imports: [NgtMesh, NgtMeshStandardMaterial, NgtBoxGeometry, NgtSobaOrbitControls, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class CubeComponent {

  @Input() position?: NgtVector3;

  hovered = false;
  active = false;

  readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  constructor(private textureLoader: NgtTextureLoader) {}


  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
  }


}
