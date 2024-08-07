import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

    @Input()
    public charactersList: Character[] = [];

    @Output()
    public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

    emitDeleteCharacter(characterId: string):void{
        this.onDeleteCharacter.emit(characterId);
    }
}
