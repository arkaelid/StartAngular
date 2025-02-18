import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: "crm-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.css"],
  standalone: true,
  imports: [NgIf, NgFor]
})
export class HelpComponent {
  @Input()
  field?: AbstractControl;
  @Input()
  errorMessages?: { [key: string]: string };

  isError(): boolean {
    return !!this.field && this.field.touched && !this.field.valid;
  }

  get errors(): string[] {
    return Object.keys(this.field?.errors as object).map((key) => {
      return this.errorMessages?.[key]
        ? this.errorMessages?.[key]
        : `Missing message for ${key}`;
    });
  }
}
