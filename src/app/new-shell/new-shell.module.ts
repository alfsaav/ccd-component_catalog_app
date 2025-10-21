import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewShellPage } from './new-shell.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NewShellPageRoutingModule } from './new-shell-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NewShellPageRoutingModule
  ],
  declarations: [NewShellPage]
})
export class NewShellPageModule {}
