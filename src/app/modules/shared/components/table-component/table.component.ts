import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
    selector: "app-table-component",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, AfterViewInit {

    @Input() list;
    @Input() pagination;
    @Input() sortPresent;
    @Input() filterPresent;
    @Input() displayedColumns;
    @Input() paginationOptions;
    @Input() showFirstLastButton;
    @Input() pageSize;
    @Output() selectedRow: EventEmitter<any> = new EventEmitter<any>();
    selectedRowIndex = -1;
    dataSource: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    headers = [];

    constructor() {
    }

    ngOnInit() {
        this.setDataSource();
        this.setHeaders();
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    highlight(row) {
        this.selectedRowIndex = row.id;
        this.selectedRow.emit(row);
    }

    setDataSource<T>() {
        this.dataSource = new MatTableDataSource<T>(this.list);
    }

    setHeaders() {
        this.displayedColumns.forEach((result) => {
            this.headers.push(result.fieldType);
        });
    }

    setPaging() {
        this.dataSource.paginator = this.paginator;
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        if (this.pageSize) {
            this.paginator._changePageSize(this.pageSize);
        } else {
            this.paginator._changePageSize(10);
        }
    }
}
