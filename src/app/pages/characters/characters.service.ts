import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationCharacter } from './characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<PaginationCharacter>{

    let url = "https://dragonball-api.com/api/characters?page=2&limit=5";
    return this.http.get<PaginationCharacter>(url);
  }
}
