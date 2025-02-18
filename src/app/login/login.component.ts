import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HelpComponent } from '../component/help/help.component';
import { AuthentificationService } from './authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HelpComponent
  ]
})
export class LoginComponent {
  private authent = inject(AuthentificationService);
  private router = inject(Router);
  
  public loginForm = new FormGroup({
    login: new FormControl('', {
      validators : [Validators.required, Validators.minLength(3)],
      nonNullable: true,}),
    password: new FormControl('', {
      validators: [Validators.required, this.checkPassword],
      nonNullable: true,}),
  });

  protected onSubmit(): void {
    console.log('submitted');
    if (this.loginForm.valid) {
      console.log('loginForm', this.loginForm.value)
      const { login, password } = this.loginForm.getRawValue();
      const res = this.authent.authentUser(login, password);
      console.log('res', ' from service');
    } else { 
      console.log(this.loginForm.controls.password.errors);
    }
    this.router.navigateByUrl('/home');
  }

  private checkPassword(c: AbstractControl): ValidationErrors | null {
    if (c.value.length < 5) {
      return { checkPassword: 'Error control password' };
    }
    return null;
  }
}