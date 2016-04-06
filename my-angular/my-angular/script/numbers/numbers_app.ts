import {Component} from 'angular2/core';
import {Numbers} from './numbers';
import {NumbersList} from './numbers_list';

@Component({
    selector: 'numbers-app',
    templateUrl: 'html/numbers/app.html',
    styles: ['a { cursor: pointer; cursor: hand; }'],
    directives: [NumbersList]
})

export class NumbersApp {
    numbers: Numbers[] = [
        { text: 'Neue Anträge', quantity: "12", value: "30265 " },
        { text: 'Neue Policen', quantity: "f7", value: 23555 }
    ];


    addNumbers(data: Numbers) {
        this.numbers.push(data);
    }
}

