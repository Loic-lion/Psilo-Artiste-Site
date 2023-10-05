import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FacebookPostService {
  private accessToken = '??????????????????????????????';
  private pageId = 'Psiloshock';

  constructor(private http: HttpClient) {}

  getLatestPosts(limit: number = 5) {
    const apiUrl = `https://graph.facebook.com/v17.0/${this.pageId}/feed?access_token=${this.accessToken}&limit=${limit}`;

    return this.http
      .get(apiUrl)
      .toPromise()
      .then((response: any) => {
        if (response.data && response.data.length > 0) {
          console.log(response.data);
          return response.data;
        } else {
          throw new Error('Aucun post trouvé.');
        }
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données depuis l'API Facebook",
          error
        );
        throw error;
      });
  }
}
