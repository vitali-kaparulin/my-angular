import {Component, Input} from 'angular2/core';
import {Numbers} from './numbers';
@Component({
    selector: 'numbers-list',
    styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
    ],
    templateUrl: 'html/numbers/list.html'
})
export class NumbersList {
    @Input() numbers: Numbers[];
}

