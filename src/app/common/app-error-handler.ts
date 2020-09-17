import { ErrorHandler } from '@angular/core';
import { error } from 'protractor';

export class AppErrorHandler extends ErrorHandler{
    handleError()
    {
        alert('Unexpected error occourred.');
        console.log(error);
    }
}