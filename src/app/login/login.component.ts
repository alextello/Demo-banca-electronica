import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['', [Validators.email, Validators.required]],
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
}
