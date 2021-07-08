import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'number-checker';
    number:number = 0;
    theWay:string = '';

    get isValid():boolean{
        if (this.theWay === "prime") {
            return this.isPrime(this.number)
        }
        else if (this.theWay === "fibo"){
            return this.isFibonacci(this.number)
        }
        return false
    }

    public isPrime(num:number){
        for(let i = 2; i < num; i++){
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    public isFibonacci(num:number){ 
        const firstCondition = Math.sqrt(5 * Math.pow(num, 2) + 4) % 1 === 0;
        const secondCondition = Math.sqrt(5 * Math.pow(num, 2) - 4) % 1 === 0;

        return firstCondition || secondCondition;
    }

}
