import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesRoutingModule } from './pipes.routing';
import { PipeComponent } from './pipe-document/pipe.component';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { FilterTermPipe } from './filter-term.pipe';





@NgModule({
  declarations: [
    PipeComponent,
    TruncatePipe,
    FilterTermPipe

  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule

  ]
})
export class PipesModule { }
