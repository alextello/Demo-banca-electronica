import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
})
export class CuentasComponent implements OnInit {
  cuentas: [];
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.cuentas().subscribe((res) => {
      this.cuentas = res;
    });
  }
}
