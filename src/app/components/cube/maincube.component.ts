import { NgtCanvas } from '@angular-three/core';
import {
  NgtSpotLight,
  NgtPointLight,
  NgtAmbientLight,
} from '@angular-three/core/lights';
import { NgtVector3 } from '@angular-three/core';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtMesh } from '@angular-three/core/meshes';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mesh } from 'three';
import { CubeComponent } from './cube.component';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
/*
@Component({
  selector: 'app-cube',
  standalone: true,
  template: `
    <ngt-mesh
      [position]="position"
      (pointerover)="hovered = true"
      (pointerout)="hovered = false"
      (click)="active = !active"
      [scale]="active ? 1.5 : 1"
      (beforeRender)="onBeforeRender($event.object)"
    >
      <ngt-box-geometry></ngt-box-geometry>
      <ngt-mesh-standard-material
        [color]="hovered ? 'turquoise' : 'tomato'"
      ></ngt-mesh-standard-material>
    </ngt-mesh>
  `,
  imports: [NgtMesh, NgtMeshStandardMaterial, NgtBoxGeometry],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubeComponent {
  @Input() position?: NgtVector3;

  hovered = false;
  active = false;

  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
  }
}
*/
@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './maincube.component.html',
  styleUrls: ['./maincube.component.scss'],
  imports: [
    NgtCanvas,
    NgtAmbientLight,
    NgtPointLight,
    NgtSpotLight,
    CubeComponent,
    NgtSobaOrbitControls
  ],
})
export class MainCubeComponent {}
