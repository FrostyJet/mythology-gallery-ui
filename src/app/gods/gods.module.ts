import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GodsListComponent } from './gods-list/gods-list.component';
import { MaterialModule } from '../material/material.module';
import { GodsPreviewComponent } from './gods-preview/gods-preview.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GodsListComponent, GodsPreviewComponent],
  imports: [CommonModule, MaterialModule, RouterModule, SharedModule],
})
export class GodsModule {}
