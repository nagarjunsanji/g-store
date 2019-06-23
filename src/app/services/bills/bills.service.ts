import { Injectable } from '@angular/core';
import { Bill } from 'src/app/core/bills/bill';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor() { }
  bill: Bill[] = [
    {
      "total": 10,
      "customerName": "Customer 1",
      "items": [
        {
          "weight": 3,
          "price": 3,
          "total": 9,
          "name": "Item-1"
        },
        {
          "weight": 4,
          "price": 4,
          "total": 16,
          "name": "Item-2"
        }]
    },
    {
      "total": 20,
      "customerName": "Customer 2",
      "items": [
        {
          "weight": 3,
          "price": 2,
          "total": 6,
          "name": "Item-3"
        },
        {
          "weight": 4,
          "price": 4,
          "total": 16,
          "name": "Item-4"
        }]
    }
  ]
  billSource = new BehaviorSubject<Bill[]>(this.bill);

  getBillsSourceSubject(): Observable<Bill[]> {
    return this.billSource.asObservable();
  }

  setBill(bill: Bill) {
    let newBill = this.bill;

    newBill.push(bill);
    this.bill = newBill;

    this.billSource.next(newBill);
  }

  setBills(bills: Bill[]) {
    this.billSource.next(bills);
  }

  getBillById(id){
    const billSource = new BehaviorSubject<Bill>(this.bill[id]);
    return billSource.asObservable();
  }
}
