import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = '../assets/json/about-me.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<string> {
    return this.http.get<string>(this.dataUrl);
  }
}
