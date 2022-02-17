import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [SidebarComponent, ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, ToolbarComponent, FooterComponent]
})
export class CoreModule { }
