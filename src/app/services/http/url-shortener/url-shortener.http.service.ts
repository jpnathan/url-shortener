import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { BITLY_API_KEY } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerHttpService {
  private params = new HttpParams().set('access_token', BITLY_API_KEY);
  private url = 'https://api-ssl.bitly.com/v3/shorten';

  constructor(
    private http: HttpClient
  ) { }

  public get(payload): Promise<any> {
    return new Promise(resolve => {
      return this.http.get(
        `${this.url}?${this.params}&longUrl=${payload}`)
        .subscribe(response => resolve(response));
    });
  }
}
