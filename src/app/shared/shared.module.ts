import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { HighLightDirective } from './directives/high-light/high-light.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FirstComponent, HighLightDirective],
  providers: [],
  exports: [CommonModule, FormsModule, FirstComponent, HighLightDirective]
})
export class SharedModule {}
