import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BookServiceService } from 'src/app/services/book-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  dataSource = new MatTableDataSource();

  constructor(
    public service: BookServiceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BookInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  bookId: number;
  ngOnInit() {
    console.log(this.data);
  }

  onAddToCart(form: NgForm) {
    this.service.addToCart(form.value).subscribe((res) => {
      console.log('res :>> ', res);
    });
  }
}
