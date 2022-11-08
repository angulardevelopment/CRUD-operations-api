import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(environment.apiUrl + url);
  }

  putRequest(url: string, data: any) {
    return this.http.put(environment.apiUrl + url, data).pipe(
      map((res: any) => res));
  }

  postRequest(url: string, data: any) {
    return this.http.post(environment.apiUrl + url, data).pipe(
      map((res: any) => res));
  }

  deleteRequest(url: string) {
    return this.http.delete(environment.apiUrl + url).pipe(
      map((res: any) => res));
  }





}


export interface User {
  body: string;
  id: number;
  title: string;
  userId: number;
}