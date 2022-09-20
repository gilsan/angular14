import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshLambertMaterial } from '@angular-three/core/materials';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Texture } from 'three';

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
export class LambertComponent implements OnInit {

  @Input() texture: string = '';
  texture$: Observable<Texture>| null = null ;

  constructor(private textureLoader: NgtTextureLoader) {}

  ngOnInit(): void {
    if (this.texture.length) {
      this.texture$ = this.textureLoader.load(this.texture);
    }
  }

}
