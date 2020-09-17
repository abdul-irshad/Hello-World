import { BadInputError } from './../common/bad-input-error';
import { AppError } from './../common/app-error';
import { CardsService } from './../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-apiconsume',
  templateUrl: './apiconsume.component.html',
  styleUrls: ['./apiconsume.component.css']
})

export class APIConsumeComponent implements OnInit  {

  cards:any;
  constructor(private service:CardsService){
    
  }
  
  ngOnInit(){
    this.service.getCard()
   .subscribe(response =>{
    this.cards=response;
   });
  }

  postCards(){
    this.service.createCard()
    .subscribe(response => {
      console.log(response);
    },
    (error:AppError)=>{
      if(error instanceof BadInputError){
        alert('Bad input error');
      }
      else throw error;
    });
  }

  updateCard(card: any){
    this.service.updateCard(card)
    .subscribe(response=>{
      console.log(response);
    });
  }

  deleteCard(card: any){
    this.service.deleteCard(card)
    .subscribe(response=>{
      let index=this.cards.indexOf(card);
      this.cards.splice(index,1);
    },
    (error:AppError)=>{
      if(error instanceof NotFoundError){
        alert('Card details already have been deleted.');
      }
      else throw error;
    });
  }
}


