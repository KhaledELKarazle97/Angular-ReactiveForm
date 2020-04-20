import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//this service is used to register users
export class RegistrationService {
  constructor() { }
  public registerUser(email:String): Observable<any>{
    return ajax.post('https://reqres.in/api/users',{email:email}).pipe(
      map(res => {
        return res.response;
      }),
      catchError(err => {return err})
    );
  }
}
