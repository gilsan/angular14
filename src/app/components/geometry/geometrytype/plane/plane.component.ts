import { NgtPlaneGeometry } from '@angular-three/core/geometries';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


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

  @Input() args = [0,0,0,0];

}
