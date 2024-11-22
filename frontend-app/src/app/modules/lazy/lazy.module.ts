import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';
import { RouterModule, Routes } from '@angular/router';

// http://localhost:4200/lazy
const LAZY_ROUTES: Routes = [
  {
    path: '',
    component: IAmLazyComponent,
  },
];

@NgModule({
  declarations: [IAmLazyComponent],
  imports: [CommonModule, RouterModule.forChild(LAZY_ROUTES)],
})
export class LazyModule {}
