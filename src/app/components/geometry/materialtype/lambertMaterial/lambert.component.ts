import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshLambertMaterial } from '@angular-three/core/materials';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-lambert',
  standalone: true,
  templateUrl: './lambert.component.html',
  imports: [
    NgtMeshLambertMaterial,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class LambertComponent {

  readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  constructor(private textureLoader: NgtTextureLoader) {}

}
