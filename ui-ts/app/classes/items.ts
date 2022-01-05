import {item} from './interface/ItemInterface'

export class Items {
    // properties
    _categoryId: number
    _categoryName: string
    _id: number
    _name: string
    _price: number

    // contructor
    constructor(categoryId:number,
            categoryName:string,
            id:number,
            name:string,
            price:number){
        this._categoryId = categoryId
        this._categoryName = categoryName
        this._id = id
        this._name = name
        this._price = price
    }
    
    // accessor
    get categoryName() {
        return this._categoryName
    }
    get name() {
        return this._name
    }

    // methods

}
