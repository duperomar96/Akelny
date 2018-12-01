import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
// import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
// import {_throw} from 'rxjs/observable/throw';
// import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class SearchService {


  constructor(private http: Http) { }

  getRecipe(ing) {
    return this.http.get('https://api.edamam.com/search?q=' + ing + '&app_id=90513d02&app_key=2e52e904fa3a8d0a171512ef02e05ec4')
    .map(
      (recipe: Response) => {
        const data = recipe.json();
        // for (const server of data) {
        //   server.name = 'FETCHED_' + server.name;
        // }
        console.log('galy' + ing);
       // console.log(data);
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
}



}
