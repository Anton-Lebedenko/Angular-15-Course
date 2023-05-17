import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { HighLightDirective, SelectByBorderDirective } from './directives';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FirstComponent, HighLightDirective, SelectByBorderDirective],
  providers: [],
  exports: [CommonModule, FormsModule, FirstComponent, HighLightDirective, SelectByBorderDirective]
})
export class SharedModule {}
