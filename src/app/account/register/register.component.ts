import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { finalize, map } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  /*(?=^.{6,10}$):

This is a positive lookahead assertion that checks the length of the password.
^.{6,10}$: This ensures that the entire password is between 6 and 10 characters long.
^ asserts the start of the string.
. matches any character (except newline).
{6,10} specifies that there must be at least 6 and at most 10 characters.
$ asserts the end of the string.

(?=.*\d):

This is another positive lookahead assertion that ensures at least one digit is present in the password.
.*\d means that any character (0 or more times, due to .*) must be followed by at least one digit (\d).

(?=.*[a-z]):

This positive lookahead checks for at least one lowercase letter.
.*[a-z] means that any character (0 or more times) must be followed by at least one lowercase letter.
(?=.*[A-Z]):

This positive lookahead checks for at least one uppercase letter.
.*[A-Z] means that any character (0 or more times) must be followed by at least one uppercase letter.
(?=.*[!@#$%^&*()_+}{":;'?/>,.<]):

This positive lookahead checks for at least one special character.
.*[!@#$%^&*()_+}{":;'?/>,.<] means that any character (0 or more times) must be followed by at least one of the specified special characters.
(?<!\s):

This is a negative lookbehind assertion that ensures there are no spaces in the password.
It asserts that the string does not contain any whitespace characters anywhere in the password.
.*$:

This part matches any characters (0 or more times) until the end of the string.
It effectively ensures that the entire string is consumed by the pattern.

*/
  passwordPattern = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
  phoneNumberPattern = /^01[125][0-9]{8}/;
  errors: string[] | null = null;

  constructor(private _FormBuilder:FormBuilder, private _AccountService:AccountService, private _Router:Router){}


  registerForm = this._FormBuilder.group({
    displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email], [this.validateEmailNotTaken()]],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
    phoneNumber : ['', [Validators.required, Validators.pattern(this.phoneNumberPattern)]]
  })

  onSubmit(){
    if(this.registerForm.valid){
      this._AccountService.register(this.registerForm.value).subscribe({
        next: () => {
          this._Router.navigateByUrl('/shop');
        },
        error: (err) => {
          this.errors = err.errors;
        }
      });
    }
  }

  validateEmailNotTaken():AsyncValidatorFn{
    return (control: AbstractControl) => {
      console.log(control);
      return this._AccountService.checkEmailExists(control.value).pipe(
        map(result => result ? {emailExists: true} : null),
        finalize(() => control.markAsTouched())
      )
    }
  }

}
