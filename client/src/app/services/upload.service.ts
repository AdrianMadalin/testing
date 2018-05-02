import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UploadService {

  constructor(private _httpClient: HttpClient) {
  }

  onMovieUpload(data) {
    const url = '/api-movie/kungfu';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(url, data, {headers}).map((response) => response);
  }

  getMovieUrl() {
    const url = '/api-movie/kungfu';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.get(url, {headers}).map((response) => response);
  }

  onMovieDelete(data) {
    const url = '/api-movie/kungfu';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.put(url, data, {headers}).map((response) => response);
  }

}
