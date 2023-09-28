import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataMusicService {
  private musicUrl = '../assets/json/music.json';

  constructor(private http: HttpClient) {}

  getMusic(): Observable<string> {
    return this.http.get<string>(this.musicUrl);
  }
}
