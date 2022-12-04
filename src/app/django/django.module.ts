import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { DjangoComponent } from "./django.component";
import { DjangoRoutingModule } from "./django.routing";

@NgModule({
  declarations: [
    DjangoComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DjangoRoutingModule
  ]
})
export class DjangoModule {}
