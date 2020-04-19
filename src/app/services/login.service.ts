import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  public login(email:String,password:String): Observable<any>{
    return ajax.post('https://reqres.in/api/login',{email:email,password:password}).pipe(
      map(res => {
        return res.response;
      }),
      catchError(err => {return of(err['status'])})
    );
  }
}
