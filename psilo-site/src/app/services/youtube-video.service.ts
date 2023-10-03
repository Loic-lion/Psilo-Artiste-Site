import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeVideoService {
  private apiUrl = '?????????????????????';
  private apiKey = '??????????????????';
  private channelId = 'U??????????????';

  constructor(private http: HttpClient) {}

  getLatestVideo(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?key=${this.apiKey}&channelId=${this.channelId}&order=date&part=snippet&type=video&maxResults=1`
    );
    console.log();
  }
}
