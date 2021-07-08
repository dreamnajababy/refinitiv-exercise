import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';



export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    title = 'table-filtering';
    displayedColumns: string[] = ['name'];
    dataSource = new MatTableDataSource([]);

    @ViewChild(MatPaginator) paginator:any;

    ngOnInit(){
        const URL = `https://api.publicapis.org/categories`
            this.http.get(URL).subscribe( (data:any) => {
            this.dataSource = new MatTableDataSource(data.map( (item:string) => {return {name:item}}))
            this.dataSource.paginator = this.paginator;
        })
    }
    ngAfterViewInit() {
    }
    constructor(private http:HttpClient){
    }

    public emitFilter(e:any){
        let value = e.target.value
        this.dataSource.filter = value.trim().toLowerCase();
    }
}
