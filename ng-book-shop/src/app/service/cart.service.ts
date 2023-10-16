import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Book } from 'src/app/data/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  $cart:Observable<Book[]> = this.cartSubject.asObservable();

  constructor() { }

  addToCart(book:Partial<Book>): Observable<Book[]>{
    const books = this.cartSubject.getValue();
    let duplicateDetect = false;
    books.forEach(data => {
      if(data.id === book.id){
        duplicateDetect = true;
      }
    })
    if(!duplicateDetect){
      books.push(book);
    }
    this.cartSubject.next(books);
    return of(books);
  }

  // detectDuplicate(books:Book[], id: number):boolean{
  //   return !!books.map( b => b.id == id);
  // }

}
