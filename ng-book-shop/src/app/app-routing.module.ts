import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { AuthorDetailsComponent } from './book/author-details/author-details.component';
import { BookReviewComponent } from './book/book-review/book-review.component';
import { bookResolver, cartResolver } from './service/book-resolver.service';
import { CartViewComponent } from './book/cart-view/cart-view.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component: BookListComponent
  },
  {
    path:'home/cart-view', component: CartViewComponent,
    resolve:{
      carts:cartResolver
    }
  },
  {
    path:'home/book/:id', component: BookDetailsComponent,
    resolve:{
      book:bookResolver
    },
    children:[
      {
        path:'author', component: AuthorDetailsComponent
      },
      {
        path:'review', component: BookReviewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
