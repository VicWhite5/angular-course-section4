import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

    constructor(private dbzService: DbzService) {}

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    onNewCharacter(character: Character): void {
        this.dbzService.onNewCharacter(character);
    }

    onDeleteCharacterById(characterId: string): void {
        this.dbzService.onDeleteCharacterById(characterId);
    }

    // //Por lo general esto no va aca
    // public characters: Character[] = [{
    //     id: 1,
    //     name: 'Goku',
    //     power: 10000
    // }, {
    //     id: 2,
    //     name: 'Vegeta',
    //     power: 9000
    // },{
    //     id: 3,
    //     name: 'Trunks',
    //     power: 10
    // }];

    // onNewCharacter(character: Character): void {
    //     const {name, power} = character;
    //     this.characters.push({
    //         id: this.characters.length + 1,
    //         name: name,
    //         power: power
    //     });
    //     // this.characters.push(character);
    // }

    // onDeleteCharacter(index: number): void {
    //     this.characters.splice(index, 1);
    // }
}