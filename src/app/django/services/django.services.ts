import { Injectable, OnDestroy  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DjangoService implements OnDestroy {
  serverIP= 'http://192.168.1.4:8000';
  url = 'http://183.98.12.201:3000'; // 사무실

  constructor(
    private http: HttpClient
  ) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  challenges(): Observable<any> {

   return this.http.get<any>(`${this.serverIP}/challenges/january`);

  }



}
