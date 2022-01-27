import {Component} from '../core/component'
export class FavouriteComponents extends Component{
    constructor(id){
        super(id);
        this.init();
    }
    init = () =>{
        console.log('favourite');
    }
}