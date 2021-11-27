import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { God, GodDetails } from '../models/gods.model';

@Injectable({ providedIn: 'root' })
export class GodsService {
  constructor(private http: HttpClient) {}

  getApiHost() {
    return environment.godsApiHost;
  }

  getGods(): Observable<Array<God>> {
    return this.http
      .get<{ gods: God[] }>(this.getApiHost() + '/gods')
      .pipe(map(({ gods }) => gods));
  }

  getGodDetails(str: string): Observable<GodDetails> {
    let slug = str.toLowerCase().replace(/ /g, '-').replace(/'/g, '');

    return this.http
      .get<{ god: GodDetails }>(`${this.getApiHost()}/gods/${slug}`)
      .pipe(map(({ god }) => god));
  }
}
