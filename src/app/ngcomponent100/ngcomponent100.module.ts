import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { CardComponent } from "./components/card/card.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { Ngcomponent100Component } from "./ngcomponent100.component";
import { Ngcomponent100RoutingModule } from "./ngcomponent100.routing";



@NgModule({
  declarations: [
    Ngcomponent100Component,
    ToolbarComponent,
    CardComponent,
    AccordionComponent

  ],
  imports: [
    CommonModule,
    Ngcomponent100RoutingModule

  ]
})
export class Ngcomponent100Module {}
