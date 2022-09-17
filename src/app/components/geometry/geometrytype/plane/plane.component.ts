import { NgtPlaneGeometry } from '@angular-three/core/geometries';
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-plane',
  standalone: true,
  templateUrl: './plane.component.html',
  imports: [
    NgtPlaneGeometry
     ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PlaneComponent {


}
