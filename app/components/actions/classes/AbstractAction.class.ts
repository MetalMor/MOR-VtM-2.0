'use strict';
import {IndexedGameEntity} from "../../entities/classes/IndexedGameEntity.class";
import {IAction} from "../interfaces/IAction.interface";
import {IRollSet} from "../interfaces/IRollSet.interface";
/**
 * Created by Mor on 15/08/2016.
 */
export abstract class AbstractAction extends IndexedGameEntity implements IAction {
    _desc: string;
    _time: Date;
    _rolls: IRollSet[];

    /**
     * Resuelve todas las tiradas de dados englobadas en la acción.
     */
    resolve(): void {
        var rolls: IRollSet[] = this.rolls;
        rolls.forEach(function(r) {
            r.resolve();
        });
    }

    get desc(): string {
        return this._desc;
    }
    set desc(_desc: string) {
        this._desc = _desc;
    }

    get time(): Date {
        return this._time;
    }
    set time(_time: Date) {
        this._time = _time;
    }

    get rolls(): IRollSet[] {
        return this._rolls;
    }
    set rolls(_rolls: IRollSet[]) {
        this._rolls = _rolls;
    }
}