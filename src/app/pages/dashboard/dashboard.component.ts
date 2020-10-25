import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import Swal from 'sweetalert2';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  biografia: any;
  letra: string;
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      artista: ['', [Validators.required]],
      cancion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get artista(): string {
    return this.form.get('artista').value;
  }

  get cancion(): string {
    return this.form.get('cancion').value;
  }

  get artistaControl(): AbstractControl {
    return this.form.get('artista');
  }

  get cancionControl(): AbstractControl {
    return this.form.get('cancion');
  }

  handleSubmit(): void {
    if (this.form.valid) {
      this.http.artista(this.artista).subscribe((val) => {
        this.biografia = val.artists[0];
      });
      this.http.cancion(this.cancion, this.artista).subscribe((val) => {
        this.letra = val.lyrics;
      });
    } else {
      Swal.fire({
        icon: 'error',
        toast: true,
        title: 'Ambos campos son obligatorios',
        timer: 2000,
        position: 'top-end',
        showConfirmButton: false,
      });
    }
  }
}
