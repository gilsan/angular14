import {   NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Texture } from 'three';

@Component({
  selector: 'app-standard',
  standalone: true,
  templateUrl: './standard.component.html',
  imports: [
    NgtMeshStandardMaterial,
    AsyncPipe,
    NgForOf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader],
})
export class StandardComponent implements OnInit {

  texture$: Observable<Texture>| null = null ;
  colors = ['red', 'green', 'blue', 'hotpink', 'orange', 'teal'];
  constructor(private textureLoader: NgtTextureLoader) {}

  ngOnInit(): void {

    // if (this.texture.length) {
    //   this.texture$ = this.textureLoader.load(this.texture);
    // }

}


}
