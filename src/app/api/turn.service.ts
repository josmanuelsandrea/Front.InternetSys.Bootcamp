import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnService {

  constructor() { }

  private readonly _http = inject(HttpClient);

  postTurnClient(attentionTypePK: string,clientId: number): Observable<any> {
    const body = {
      "attentionTypePK": attentionTypePK,
      "clientId": clientId
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post('https://localhost:7102/api/Turn/', body, { headers: headers });
  }
}
