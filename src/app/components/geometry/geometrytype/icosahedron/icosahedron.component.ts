import { NgtIcosahedronGeometry } from '@angular-three/core/geometries';
import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-icosahedron',
  standalone: true,
  templateUrl: './icosahedron.component.html',
  imports: [
    NgtIcosahedronGeometry
     ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class IcosaHedronComponent {



}
