import {   NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-standard',
  standalone: true,
  templateUrl: './standard.component.html',
  imports: [
    NgtMeshStandardMaterial,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class StandardComponent {

  readonly texture$ = this.textureLoader.load('assets/background/19.jpg');
  constructor(private textureLoader: NgtTextureLoader) {}
}
