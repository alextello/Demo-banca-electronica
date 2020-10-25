import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.pattern(
            /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
          ),
          Validators.required,
        ],
      ],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    console.log(this.form);
    if (this.form.valid) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      }, 2000);
    }
  }

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }
  get passwordControl(): AbstractControl {
    return this.form.get('password');
  }
}
