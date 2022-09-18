import {   NgtMeshPhysicalMaterial, NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Texture } from 'three';

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

  readonly texture$ = this.texture.length > 0 ? this.textureLoader.load('assets/background/'+this.texture): null ;
  constructor(private textureLoader: NgtTextureLoader) {}

  ngOnInit(): void {
      console.log(this.texture);
  }



}
