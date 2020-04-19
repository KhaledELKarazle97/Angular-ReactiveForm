import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const NotSameEmail: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const conEmail = control.get('conEmail');

  return email && conEmail && email.value != conEmail.value ? { 'NotSameEmail': true } : null;
};