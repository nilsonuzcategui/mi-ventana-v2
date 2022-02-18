import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.css'],
})
export class SignupPage {
  // TODO: Agregar validaciones
  signupForm = this.fb.group({
    name: [''],
    lastName: [''],
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      duration: 2000,
    });
    toast.present();
  }

  onSubmit() {
    this.auth.login(this.signupForm.value).subscribe(
      (res) => {
        console.log(this.signupForm.value);
        this.router.navigateByUrl('/home', { replaceUrl: true });
      },
      async (err: Error) => {
        await this.presentToast(err.message);
      }
    );
  }
}
