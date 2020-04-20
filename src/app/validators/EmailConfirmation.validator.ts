import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

//check if email addresses are the same or not
export const NotSameEmail: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const conEmail = control.get('conEmail');
  return email && conEmail && email.value != conEmail.value ? { 'NotSameEmail': true } : null;
};