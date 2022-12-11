import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { I072401,I072404 } from './gangwon.models';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  apiUrl ="http://192.168.1.4:3000";

  constructor(
    private http: HttpClient
  ) { }


  public uploadRestorant(restorant: I072404[], tableName: string): Observable<any>  {
    return this.http.post(`${this.apiUrl}/restorant/restorantData`, { data: restorant, tablename: tableName });
  }

  public uploadForeignRestorant(restorant: I072401[], tableName: string): Observable<any>  {
    return this.http.post(`${this.apiUrl}/restorant/foreignRestorantData`, { data: restorant, tablename: tableName });
  }


}
