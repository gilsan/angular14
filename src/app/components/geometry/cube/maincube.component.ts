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
