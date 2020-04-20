import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/internal/observable/dom/ajax';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
//to check whether the email exist in a json file
//you can replace the assets/emails.json with an actual api
export class CheckemailexistenceService {
  constructor(private http: HttpClient) { }
  emails = <any>[];
  ngOnInit() { }
  public findEmail(email: String): Observable<any> {
    return ajax.get('assets/emails.json').pipe(
      map(res => {
        this.emails = res.response;
        let found = this.emails.find(element => element.email == email);
        return found  //looks for provided email and return result
      })
    );
  }
}
