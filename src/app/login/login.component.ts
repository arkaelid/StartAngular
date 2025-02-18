import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HelpComponent } from '../component/help/help.component';

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
  public loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, this.checkPassword])
  });

  protected onSubmit() {
    console.log(this.loginForm.value);
  }

  private checkPassword(c: AbstractControl): ValidationErrors | null {
    if (c.value.length < 5) {
      return { checkPassword: 'Error control password' };
    }
    return null;
  }
}