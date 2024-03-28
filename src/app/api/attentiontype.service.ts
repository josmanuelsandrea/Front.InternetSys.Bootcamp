import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttentiontypeService {

  constructor() { }
  private readonly _http = inject(HttpClient);

  getAttentionType(): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return this._http.get(`https://localhost:7102/api/AttentionType`);
  }
}
