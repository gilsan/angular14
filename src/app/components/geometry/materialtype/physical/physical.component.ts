import {   NgtMeshPhysicalMaterial, NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Texture, TextureLoader } from 'three';
import { NgtLoader } from '@angular-three/core';

@Component({
  selector: 'app-physical',
  standalone: true,
  templateUrl: './physical.component.html',
  imports: [
    NgtMeshPhysicalMaterial,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class PhysicalComponent implements OnInit {

  @Input() texture: string = '';
  texture$: Observable<Texture>| null = null ;
  colors = ['red', 'green', 'blue', 'hotpink', 'orange', 'teal'];
  constructor(
    private textureLoader: NgtTextureLoader,
    ) {}

  ngOnInit(): void {

      if (this.texture.length) {
        this.texture$ = this.textureLoader.load(this.texture);
      }

  }



}
