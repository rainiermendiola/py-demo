import {item} from './interface/ItemInterface'
import axios from 'axios'

export class ItemsList{
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
        let data:Array<item> = []

        axios.get('http://localhost:5000/api/items')
            .then((d)=>{
                data = d.data
            })
        // let item:item = {
        //     categoryId: 1,
        //     categoryName: 'Pencil',
        //     id: 1,
        //     name: 'Mongol #1',
        //     price: 20.50
        // }
        // data.push(item)
        return data
    }
}