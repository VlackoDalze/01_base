import {Component} from "@angular/core";

@Component({
    selector: "app-contador",
    templateUrl: './contador.component.html'
})
export class ContadorComponent {
    title = 'Contador App';
    num     : number = 10;
    base    : number = 5;

    accumulate(value: number) {
        this.num += value;
    }
}