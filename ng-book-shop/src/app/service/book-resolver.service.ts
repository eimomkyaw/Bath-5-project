import { Injectable, inject } from '@angular/core';
import { Book } from '../data/book';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from './book.service';
import { CartService } from './cart.service';

export const bookResolver: ResolveFn<Book>
 = (route: ActivatedRouteSnapshot): Observable<Book> => {
  const id = route.paramMap.get('id');
  const bookService = inject(BookService);
  return bookService.findBookById(parseInt(id!));
}

export const cartResolver: ResolveFn<Book[]>
 = (route: ActivatedRouteSnapshot): Observable<Book[]> => {
  const cartService = inject(CartService);
  return cartService.$cart;
 }
