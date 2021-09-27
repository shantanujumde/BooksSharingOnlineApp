import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from 'src/app/services/book-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    public service: BookServiceService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resetForm(from?: NgForm) {
    if (from != null) {
      from.resetForm();
    }
    let formData = {
      userId: '',
      userName: '',
      email: '',
      password: '',
      address: '',
    };
  }

  onSubmit(form: NgForm) {
    this.service.addUser(form.value).subscribe((res) => {
      this.router.navigate(['/login']);
      this.resetForm(form);
      this.snackBar.open('Registered Success | Please Login', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
    });
  }
}
