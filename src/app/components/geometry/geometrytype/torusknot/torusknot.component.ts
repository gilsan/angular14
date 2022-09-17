
import {  NgtTorusKnotGeometry } from '@angular-three/core/geometries';
import { ChangeDetectionStrategy, Component } from '@angular/core';



@Component({
  selector: 'app-torusknot',
  standalone: true,
  templateUrl: './torusknot.component.html',
  imports: [
    NgtTorusKnotGeometry,
     ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TorusKnotComponent {



}
