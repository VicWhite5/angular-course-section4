import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
    //Por lo general esto no va aca
    public characters: Character[] = [{
        name: 'Goku',
        power: 10000
    }, {
        name: 'Vegeta',
        power: 9000
    },{
        name: 'Trunks',
        power: 10
    }];


}