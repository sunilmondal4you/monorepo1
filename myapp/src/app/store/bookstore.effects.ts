import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {
  getAuthorAndBookAction,
  getAuthorAndBookSuccessAction,
} from './bookstore.reducer';

@Injectable()
export class BookStoreEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getBookPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuthorAndBookAction),
      mergeMap(() => {
        const url = `https://s3.amazonaws.com/api-fun/books.json`;
        return this.http.get(url).pipe(
          map((responseData: any) => {
            let response = responseData.data;
            return getAuthorAndBookSuccessAction({ response });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );
}
