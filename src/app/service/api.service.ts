import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { GenericService } from '@generafi/common';
import { HttpCacheManager } from '@ngneat/cashew';
@Injectable({
  providedIn: 'root'
})
export class ApiService extends GenericService{

  constructor(private http: HttpClient , cacheManager: HttpCacheManager) {
    super(http, cacheManager);
  }


  // get(endpoint: string): Observable<any> {
  //   return this.http.get(`https://jsonplaceholder.typicode.com/posts/1/comments`, {}).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       return throwError(error);
  //     })
  //   );
  // }

  get(endpoint: string): Observable<any> {
    const data =  {
      "totalCount": 645,
      "items": [
          {
              "value": "with contact",
              "conditionPaiementId": null,
              "listePrixId": null,
              "isVisibleSome": true,
              "email": null,
              "isActive": true,
              "id": 11080
          },
          {
              "value": "g'g",
              "conditionPaiementId": 1,
              "listePrixId": null,
              "isVisibleSome": true,
              "email": null,
              "isActive": true,
              "id": 10965
          },
          {
              "value": "cs",
              "conditionPaiementId": 1,
              "listePrixId": null,
              "isVisibleSome": true,
              "email": null,
              "isActive": true,
              "id": 10964
          },
        ]
      }
      return  of(data)
  }


 
}
