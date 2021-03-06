'use strict';
import {IStatModificator} from "../../interfaces/IStatModificator.interface";
import {StatModificatorType} from "../../enumerations/StatModificatorType.enum";
import {StatFieldImpl} from "../../../fields/classes/implementation/StatFieldImpl.class";
import {IModificable} from "../../interfaces/IModificable.interface";
import {AbstractGameEntity} from "../../../entities/classes/abstract/AbstractGameEntity.class";
import {Constants} from "../../../util/modules/Constants.module";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractStatModificator extends AbstractGameEntity implements IStatModificator {
    _modifies: IModificable;
    //_source: IStatModificatorSource;
    _type: StatModificatorType;
    _value: number;

    constructor(obj?: AbstractStatModificator) {
        super(obj);
        this.modifies = obj && obj.modifies || new StatFieldImpl();
        this.type = obj && obj.type || StatModificatorType.Level;
        this.value = obj && obj.value || 0;
        //this.source = obj && obj.source || source;
    }

    getTypeAsString(): string {
        switch(this.type) {
            case StatModificatorType.Level:
                return Constants.Types.TYPE_MOD_LEVEL;
            case StatModificatorType.Difficulty:
                return Constants.Types.TYPE_MOD_DIFFICULTY;
            default:
                throw new Error(Constants.Errors.ERR_MODTYPE);
        }
    }
    isType(_type: StatModificatorType): boolean {
        return this.type === _type;
    }

    get modifies(): IModificable {
        return this._modifies;
    }
    set modifies(_modifies: IModificable) {
        this._modifies = _modifies;
    }
    get type(): StatModificatorType {
        return this._type;
    }
    set type(_type: StatModificatorType) {
        this._type = _type;
    }
    get value(): number {
        return this._value;
    }
    set value(_value: number) {
        this._value = _value;
    }
    /*get source(): IStatModificatorSource {
        return this._source;
    }
    set source(_source: IStatModificatorSource) {
        this._source = _source;
    }*/
}