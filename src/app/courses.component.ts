import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template:
    `
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
    
    `
})

export class coursesComponent{
title='This is title !'
onKeyUp(email){
    console.log(email) 
}
}