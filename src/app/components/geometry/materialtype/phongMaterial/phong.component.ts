import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshLambertMaterial, NgtMeshPhongMaterial } from '@angular-three/core/materials';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-phong',
  standalone: true,
  templateUrl: './phong.component.html',
  imports: [
    NgtMeshPhongMaterial,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class PhongComponent {

  readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  constructor(private textureLoader: NgtTextureLoader) {}
}
