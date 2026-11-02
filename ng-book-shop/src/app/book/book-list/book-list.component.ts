import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/data/book';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  // $books!:Observable<Book[]>;
  // $cart!:Observable<Book[]>;

  constructor(public bookService:BookService, public cartService:CartService){

  }

  ngOnInit(): void {
    // this.$books = this.bookService.$books;
    // this.$cart = this.cartService.$cart;
  }

}
