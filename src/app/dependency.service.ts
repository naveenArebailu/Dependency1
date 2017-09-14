import { Injectable } from '@angular/core';

@Injectable()
export class DependencyService {

  person=[];
  constructor() { }
  sums=0;

    persons(){
     return this.person=[
      {
        name: 'naveen',
        salary: 18929
      },
      {
        name: 'praveen',
        salary: 73637
      },
      {
        name: 'shravan',
        salary: 98422
      },
      {
        name: 'sajan',
        salary: 56372
      },
      {
        name: 'rajan',
        salary: 86372
      }
    ]
}

sum(){
  this.person.forEach(per => {
    this.sums+=per.salary;
  });

  return this.sums;
}

}
