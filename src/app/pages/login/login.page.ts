import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  // TODO: Agregar validaciones
  loginForm = this.fb.group({
    id: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController,
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      duration: 2000,
    });
    toast.present();
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe((res) => {
      console.log(this.loginForm.value);
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }, async (err: Error) => {
      await this.presentToast(err.message);
    });
  }
}
