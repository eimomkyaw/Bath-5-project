import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Book } from 'src/app/data/book';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  addToCart(book:Book){
    this.cartService.addToCart(book)
    .subscribe(data => console.log(data))
  }
  goHome(){
    this.router.navigate(['/'])
  }
  goCartView(){
    this.router.navigate(['/home/cart-view'])
  }

  //$book!:Observable<Book>;

  constructor(private route:ActivatedRoute,
     private bookService:BookService,
     private router:Router,
     private cartService:CartService){}

  book!:Book;

  ngOnInit(): void {

    this.book = this.route.snapshot.data['book']

    // const id = this.route.snapshot.paramMap.get('id')!;
    // console.log("===================", id);
    // this.$book = this.bookService.findBookById(parseInt (id));

    // this.route.paramMap.subscribe ((param: ParamMap) => {
    //     const id = param.get('id')!;
    //     console.log("=================", id);
    //     // this.$book = this.bookService.findBookById(parseInt(id))
    //     this.bookService.findBookById(parseInt(id))
    //     .subscribe( data => this.book = data);
   // })

  //  this.route.paramMap
  //  .pipe(
  //   map( (param: ParamMap) => param.get('id')),
  //   switchMap( id => this.bookService.findBookById(parseInt(id!)))
  //  )
  //  .subscribe( data => this.book = data);



  }
}
