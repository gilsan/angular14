import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  templateUrl: './box.component.html',
  imports: [
    NgtBoxGeometry,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {

}
