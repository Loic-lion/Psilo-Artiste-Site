import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataAboutService {
  private aboutMeUrl = '../assets/json/about-me.json';

  constructor(private http: HttpClient) {}

  getAboutMe(): Observable<string> {
    return this.http.get<string>(this.aboutMeUrl);
  }
}
