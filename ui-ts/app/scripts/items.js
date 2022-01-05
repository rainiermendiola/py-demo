"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
class Items {
    // contructor
    constructor(categoryId, categoryName, id, name, price) {
        this._categoryId = categoryId;
        this._categoryName = categoryName;
        this._id = id;
        this._name = name;
        this._price = price;
    }
    // accessor
    get categoryName() {
        return this._categoryName;
    }
    get name() {
        return this._name;
    }
}
exports.Items = Items;
