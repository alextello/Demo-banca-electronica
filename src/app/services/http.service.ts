import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  cancion(cancion: string, artista: string): Observable<any> {
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    return this.http.get(url);
  }

  artista(artista: string): Observable<any> {
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    return this.http.get(url);
  }
}
