import {   NgtMeshNormalMaterial } from '@angular-three/core/materials';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-normal',
  standalone: true,
  templateUrl: './normal.component.html',
  imports: [
    NgtMeshNormalMaterial,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class NormalComponent {

  readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  constructor(private textureLoader: NgtTextureLoader) {}
}
