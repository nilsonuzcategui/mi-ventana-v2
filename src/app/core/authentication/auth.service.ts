import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { FetcherService } from '../services/fetcher.service';
import { JwtHelperService } from '@auth0/angular-jwt';

// interface User {
//   id: number;
//   type: string;
//   password: string;
// }

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private fetcher: FetcherService,
    private jwt: JwtHelperService
  ) {}

  login(user: any) {
    return this.fetcher.post('/login', user).pipe(
      map((res: any) => {
        if(res.response === 'error_cedula') {
          throw new Error('La cédula/RIF no está registrada'); ;
        }
        else if(res.response === 'error_password') {
          throw new Error('La contraseña es incorrecta');
        }
        localStorage.setItem('token', res.token);
      }),
      shareReplay()
    );
  }

  getUserData() {
    return this.jwt.decodeToken(localStorage.getItem('token')).user_data;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
