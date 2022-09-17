import {  NgtSphereGeometry } from '@angular-three/core/geometries';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sphere',
  standalone: true,
  templateUrl: './sphere.component.html',
  imports: [
    NgtSphereGeometry
     ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SphereComponent {


}
