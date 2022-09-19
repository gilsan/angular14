import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshLambertMaterial, NgtMeshPhongMaterial } from '@angular-three/core/materials';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Texture } from 'three';

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
export class PhongComponent implements OnInit {

  @Input() texture: string = '';
  @Input() specularMap: string = '';
  @Input() bump: string = '';
  @Input() normal: string = '';

  @Input() displacement: string = '';
  @Input() materialrepeatandcenter: string = '';

  texture$: Observable<Texture>| null = null ;
  specular$: Observable<Texture> | null = null;
  bump$: Observable<Texture> | null = null;
  normal$: Observable<Texture> | null = null;
  displacement$: Observable<Texture> | null = null;
  materialrepeatandcenter$: Observable<Texture> | null = null;




  constructor(private textureLoader: NgtTextureLoader) {}

  ngOnInit(): void {

    if (this.texture.length) {
      this.texture$ = this.textureLoader.load(this.texture);

    }

    if (this.specularMap.length) {
      this.specular$ = this.textureLoader.load(this.specularMap);
    }

    if (this.bump.length) {
      this.bump$ = this.textureLoader.load(this.bump);
    }

    if (this.normal.length) {
      this.normal$ = this.textureLoader.load(this.normal);
    }

    if (this.displacement.length) {
      this.displacement$ = this.textureLoader.load(this.displacement);
    }

    if (this.materialrepeatandcenter.length) {
      this.materialrepeatandcenter$ = this.textureLoader.load(this.materialrepeatandcenter);
    }



  }



}
