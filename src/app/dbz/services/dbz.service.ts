import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Goku',
        power: 10000
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 9000
    },{
        id: uuid(),
        name: 'Trunks',
        power: 10
    }];

    onNewCharacter(character: Character): void {

        const newCharacter: Character = {
            ...character,
            id: uuid(),
        };

        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number): void {
    //     this.characters.splice(index, 1);
    // }

    onDeleteCharacterById(characterId: string): void {
        this.characters = this.characters.filter(character => character.id !== characterId);
    }
    
}