import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseForm {
  constructor() {}

  isValidForm(form: AbstractControl | null): boolean {
    let bandera = false;

    if (form) bandera = form.touched || (form.dirty && form.invalid);

    return bandera;
  }

  getErrorMessage(form: AbstractControl | null) {
    let message = '';

    if (form) {
      const { errors } = form;

      if (errors) {
        const messages: any = {
          required: 'Campo Requerido',
          email: 'Formato Invalido',
          pattern: 'Formato Invalido',
          minlength: 'El rango no es correcto',
          maxlength: 'El rango no es correcto',
        };

        const errorKey = Object.keys(errors).find(Boolean);

        if (errorKey) message = messages[errorKey];
      }
    }

    return message;
  }
}
