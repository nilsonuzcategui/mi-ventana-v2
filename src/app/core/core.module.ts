import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [SidebarComponent, ToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, ToolbarComponent]
})
export class CoreModule { }
