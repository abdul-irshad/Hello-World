import { BadInputError } from './../common/bad-input-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private url='http://localhost:49837/api/PaymentDetails';

  constructor(private http: HttpClient) { }

  getCard(){
    return this.http.get(this.url);
  }

  createCard()
  {
    let cards=
    {
      CardOwnerName:'Abdul Aijaz',
      CardNumber:'93642346945667',
      ExpiryDate:'06/22',
      CVVNumber:'930'
    }
      return this.http.post(this.url,cards).pipe(
        catchError((error:Response)=>{
          if(error.status===400)
          return throwError(new BadInputError(error))

          return throwError(new AppError(error))

        })
      );
  }

  updateCard(card: { PaymentID: string; })
  {
    let cards=
    {
      PaymentID:card.PaymentID,
      CardOwnerName:'Abdul Ilyas',
      CardNumber:'293435945628662',
      ExpiryDate:'05/25',
      CVVNumber:'464'
     }
    return this.http.put(this.url+'/'+card.PaymentID,cards)
  }

  deleteCard(card: { PaymentID: string; })
  {
    return this.http.delete(this.url+'/'+card.PaymentID).pipe(
    catchError((error:Response)=>{
      if(error.status===404)
      return throwError(new NotFoundError())

      return throwError(new AppError(error))
    })
    )
  }
}
