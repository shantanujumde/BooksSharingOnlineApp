import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../bookInterface';
import { ICart } from '../cartInterface';
import { IUser } from '../userInterface';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  booksUrl = 'https://localhost:44368/api/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.booksUrl + 'Books');
  }
  getCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>(this.booksUrl + 'Carts');
  }

  addToCart(crt: ICart) {
    let cart = {
      cartId: 0,
      userId: 1, // logedIn User
      bookId: crt.bookId,
      ratings: 0,
    };
    console.log('cart :>> ', cart);
    // let cart2 = JSON.stringify(cart);
    return this.http.post(this.booksUrl + 'Carts', cart);
  }
  addUser(user: IUser) {
    let val = {
      userId: 0,
      userName: user.userName,
      email: user.email,
      password: user.password,
      address: user.address,
    };
    // let val ='"EmployeeId":0,"EmployeeName":'+Emp.EmployeeName;
    console.log(user, val);
    return this.http.post(this.booksUrl + 'Users', user);
  }
}
