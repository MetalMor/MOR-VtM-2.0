'use strict';
import {IGameEntity} from "../../interfaces/IGameEntity.interface";
import {Component} from "@angular/core";
/**
 * Created by Mor on 15/08/2016.
 */
@Component({
    selector: 'game-entity',
    templateUrl: 'app/templates/GameEntity.component.html'
})
export abstract class AbstractGameEntity extends Object implements IGameEntity {
    _name: string;

    constructor(obj?: IGameEntity) {
        super(obj);
        var cast = <AbstractGameEntity> obj;
        this.name = cast && cast.name || "unnamed_"+(new Date()).getTime();
    }

    get name(): string {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }

    toString(): string {
        return this.name;
    }
    equals(obj: IGameEntity): boolean {
        if(!obj) return false;
        var other: AbstractGameEntity = <AbstractGameEntity> obj;
        if(!other.name) return false;
        return other.name === this.name;
    }
}