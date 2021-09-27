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
  ngOnInit() {
    this.bookServiceService.getCart().subscribe((data) => (this.carts = data));
  }
}
