import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { NewlineToBrPipe } from './pipes/newline-to-br.pipe';

@NgModule({
  declarations: [SectionTitleComponent, NewlineToBrPipe],
  imports: [CommonModule],
  exports: [SectionTitleComponent, NewlineToBrPipe],
})
export class SharedModule {}
