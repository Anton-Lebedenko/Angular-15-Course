import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { HighLightDirective, SelectByBorderDirective } from './directives';
import { OrderByPipe } from './pipes';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FirstComponent, HighLightDirective, SelectByBorderDirective, OrderByPipe],
  providers: [],
  exports: [CommonModule, FormsModule, FirstComponent, HighLightDirective, SelectByBorderDirective, OrderByPipe]
})
export class SharedModule {}
