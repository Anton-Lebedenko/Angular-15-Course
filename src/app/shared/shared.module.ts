import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FirstComponent],
  providers: [],
  exports: [CommonModule, FormsModule, FirstComponent]
})
export class SharedModule {}
