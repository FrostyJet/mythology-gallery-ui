import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GodsListComponent } from './gods/gods-list/gods-list.component';
import { GodsPreviewComponent } from './gods/gods-preview/gods-preview.component';
import { GodsModule } from './gods/gods.module';

const routes: Routes = [
  {
    path: '',
    component: GodsListComponent
  },
  {
    path: 'gods/:slug',
    component: GodsPreviewComponent
  }
];

@NgModule({
  imports: [
    GodsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
