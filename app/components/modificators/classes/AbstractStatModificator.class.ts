'use strict';
import {IStatModificator} from "../interfaces/IStatModificator.interface";
import {StatModificatorType} from "../enumerations/StatModificatorType.enum";
import {StatFieldImpl} from "../../fields/classes/StatFieldImpl.class";
import {IStatModificatorSource} from "../interfaces/IStatModificatorSource.interface";
import {RegularDataField} from "../../fields/classes/RegularDataField.class";
import {AbstractDataField} from "../../fields/classes/AbstractDataField.class";
import {IModificable} from "../interfaces/IModificable.interface";
import {AbstractGameEntity} from "../../entities/classes/AbstractGameEntity.class";
/**
 * Created by Mor on 24/08/2016.
 */
export abstract class AbstractStatModificator extends AbstractGameEntity implements IStatModificator {
    _modifies: IModificable;
    _source: IStatModificatorSource;
    _type: StatModificatorType;
    _value: number;

    constructor(obj?: AbstractStatModificator) {
        super(obj);
        var source: AbstractDataField = new RegularDataField();
        source.name = "environment";
        this.modifies = obj && obj.modifies || new StatFieldImpl();
        this.type = obj && obj.type || StatModificatorType.Level;
        this.value = obj && obj.value || 0;
        this.source = obj && obj.source || source;
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
    get source(): IStatModificatorSource {
        return this._source;
    }
    set source(_source: IStatModificatorSource) {
        this._source = _source;
    }
}