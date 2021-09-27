import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private bookServiceService: BookServiceService) {}

  public carts = [];
  public books = [];
  public booksOwned = [];
  ngOnInit() {
    this.bookServiceService.getCart().subscribe((data) => {
      this.carts = data;
      this.bookServiceService.getBooks().subscribe((data) => {
        this.books = data;
        this.books.forEach((book) => {
          this.carts.forEach((cart) => {
            if (book.bookId == cart.bookId && cart.userId == '1') {
              this.booksOwned.push(book);
            }
          });
        });
        // console.log('this.books :>> ', this.books, this.carts, this.booksOwned);
      });
    });
  }
}
