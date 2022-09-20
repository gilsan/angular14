
import {  NgtTorusGeometry } from '@angular-three/core/geometries';
import { ChangeDetectionStrategy, Component } from '@angular/core';



@Component({
  selector: 'app-torus',
  standalone: true,
  templateUrl: './torus.component.html',
  imports: [
    NgtTorusGeometry
     ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TorusComponent {



}
