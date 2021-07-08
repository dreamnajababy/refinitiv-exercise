import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from '@angular/material/table';


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
export class AppComponent {
    title = 'table-filtering';
    displayedColumns: string[] = ['name'];
    dataSource = new MatTableDataSource([]);

    constructor(private http:HttpClient){
    }

    async ngOnInit(){
        const URL = `https://api.publicapis.org/categories`
            this.http.get(URL).subscribe( (data:any) => {
            this.dataSource = new MatTableDataSource(data.map( (item:string) => {return {name:item}}))
        })
    }
    public emitFilter(e:any){
        let value = e.target.value
        this.dataSource.filter = value.trim().toLowerCase();
    }
}
