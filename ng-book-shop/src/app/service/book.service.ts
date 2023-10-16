import { Injectable } from '@angular/core';
import { Book } from '../data/book';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BookSubject:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  $books:Observable<Book[]> = this.BookSubject.asObservable();

  constructor(private http:HttpClient) {
    this.init();
   }

   findBookById(id:number):Observable<Book>{
    return this.$books
    .pipe(
      map( e => e.find( b => b.id == id))
    ) as Observable<Book>;
   }

   init(){
    this.getAllBooks()
    .subscribe({
      next: data => this.BookSubject.next(data),
      error: err => console.log(err),
      complete: () => console.log("Success!")
    }
)
   }

  private getAllBooks() : Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080/api/books-list');
  }
}
