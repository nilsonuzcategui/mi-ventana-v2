import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FetcherService } from './services/fetcher.service';
import { AuthService } from './authentication/auth.service';



@NgModule({
  declarations: [SidebarComponent, ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [SidebarComponent, ToolbarComponent, FooterComponent],
  providers: [FetcherService, AuthService]
})
export class CoreModule { }
