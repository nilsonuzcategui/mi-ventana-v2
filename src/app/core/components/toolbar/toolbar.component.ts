import { Component } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  getUsername() {
    const { nombre, apellido } = this.auth.getUserData();
    // Con esto obtenemos el primer nombre del usuario y el primer apellido
    return `${nombre.split(' ')[0]} ${apellido.split(' ')[0]}`;
  }
}
