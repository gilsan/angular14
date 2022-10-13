import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "../components/card/card.component";
import { DebounceClickDirective } from "../directive/debounce-click.directive";

@NgModule({
  declarations: [
    CardComponent,
   DebounceClickDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
   DebounceClickDirective
  ]
})
export class SharedModule {}
