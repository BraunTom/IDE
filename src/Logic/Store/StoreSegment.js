export default class StoreSegment {
    constructor() {
        this._logicElements = [];
        this._views = [];
        this._mapping = new Map();
    }

    add(logicElement, view) {
        this._logicElements.push(logicElement);
        this._mapping.set(logicElement, this._views.length);
        this._views.push(view);
    }

    get views() {
        return this._views;
    }

    get logicElements() {
        return this._logicElements;
    }
}