import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, flatMap, map, of, reduce } from 'rxjs';
import { Book } from 'src/app/data/book';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit, DoCheck{

  books!:Book[];

  quantity!:number[];

  constructor(private route:ActivatedRoute){}

   sum!:Observable<number>;

  ngOnInit(): void {
    this.books = this.route.snapshot.data['carts'];
  }

  ngDoCheck(): void {
    this.sum = of(this.books)
    .pipe(
      flatMap( b => b.map(b => (b.price! * b.quantity!))),
      reduce((a, b ) => a! + b!)
      );
  }

}
