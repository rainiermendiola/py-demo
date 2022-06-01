"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsList = void 0;
const axios_1 = __importDefault(require("axios"));
class ItemsList {
    // _itemsList: Array<item>
    // constructor(itemsList: Array<item>){
    //     this._itemsList = itemsList
    // }
    // get itemsList(){
    //     return this._itemsList
    // }
    // set itemsList(itemsList){
    //     this._itemsList = itemsList
    // }
    GetItems() {
        let data = [];
        axios_1.default.get('http://localhost:5000/api/items')
            .then((d) => {
            data = d.data;
        });
        // let item:item = {
        //     categoryId: 1,
        //     categoryName: 'Pencil',
        //     id: 1,
        //     name: 'Mongol #1',
        //     price: 20.50
        // }
        // data.push(item)
        return data;
    }
}
exports.ItemsList = ItemsList;
