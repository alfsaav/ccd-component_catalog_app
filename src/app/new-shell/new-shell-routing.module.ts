import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewShellPage } from './new-shell.page';

const routes: Routes = [
  {
    path: '',
    component: NewShellPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewShellPageRoutingModule {}
