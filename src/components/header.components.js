import {Component} from '../core/component'
export class HeaderComponents extends Component{
    constructor(id){
        super(id);
        this.init()
    }
    init = () =>{
        const $BTN = this.$element.querySelector('.js-header-start');
        $BTN.addEventListener('click', () => {
          buttonHandler.bind(this)();
        })
    }
}


function buttonHandler() {
    console.log(this)
    this.hide();
}
