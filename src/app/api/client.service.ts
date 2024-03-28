import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // constructor() { }

  private readonly _http = inject(HttpClient);

  getClientbyIdentification(id: string): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return this._http.get(`https://localhost:7102/api/Client/${id}`);
  }

}
