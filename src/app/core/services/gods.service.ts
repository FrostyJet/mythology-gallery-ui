import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { God, GodDetails } from '../models/gods.model';

@Injectable({ providedIn: 'root' })
export class GodsService {
  constructor(private http: HttpClient) {}

  getGods(): Observable<Array<God>> {
    return this.http
      .get<God[]>('https://cms.smitegame.com/wp-json/smite-api/all-gods/1')
      .pipe(map((gods) => gods));
  }

  getGodDetails(str: string): Observable<GodDetails> {
    let slug = str.toLowerCase().replace(/ /g, '-');

    return this.http.get<GodDetails>(
      `https://cms.smitegame.com/wp-json/wp/v2/gods?slug=${slug}&lang_id=1`
    );
  }
}
