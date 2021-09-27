import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookInfoComponent } from '../book-info/book-info.component';
import { HttpClient } from '@angular/common/http';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private bookServiceService: BookServiceService
  ) {}
  BookInfo(book) {
    this.dialog.open(BookInfoComponent, { data: book });
  }
  ShowCart() {
    this.dialog.open(CartComponent, { width: '1200px' });
  }
  public books = [];
  ngOnInit() {
    this.bookServiceService.getBooks().subscribe((data) => (this.books = data));
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
