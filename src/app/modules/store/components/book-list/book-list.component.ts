import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {RestUrls} from "../../../../constants/rest-urls";
import {Book} from "../../../../models/classes/book";
import {TableDisplayColumn} from "../../../../models/interfaces/table-display-column";
import {AuthService} from "../../../../services/auth-service";
import {SpinnerService} from "../../../core/modules/spinner/spinner.service";
import {BookDataService} from "../../services/book-data.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit , OnDestroy {
  bookList: Book[] = [];
  bookListSub: Subscription;
  displayedColumns: TableDisplayColumn[] = [
    {name: "No.", allowSort: true, fieldType: "ID"},
    {name: "Title", allowSort: true, fieldType: "Title"},
    {name: "Page Count", allowSort: true, fieldType: "PageCount"},
    {name: "Publish Date", allowSort: true, fieldType: "PublishDate"}];
  paginationOptions: number[] = [5, 10, 20];

  constructor(
    private spinnerService: SpinnerService,
    private bookDataService: BookDataService,
    private router: Router) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.spinnerService.show();
    this.bookDataService.getAllBooks().subscribe((res) => {
        this.bookList = res;
    }, (error) => {
      this.spinnerService.hide();
    }, () => {
      this.spinnerService.hide();
      // alert Error Here
    });
  }
  getBook(bookId: number): void {
     this.bookDataService.getBook(bookId);
  }
  updateBook(book: Book): void {
     this.bookDataService.updateBook(book);
  }
  deleteBook(bookId: number): void {
     this.bookDataService.deleteBook(bookId);
  }
  addBook(book: Book): void {
     this.bookDataService.addBook(book);
  }

  selectedBook(event): void {
    console.log(event);
  }
  logOut() {
    AuthService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.bookListSub) {
      this.bookListSub.unsubscribe();
    }
  }
}
