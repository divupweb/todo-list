import {Component} from '../core/component'
export class NavigationComponents extends Component{
    constructor(id){
        super(id);
        this.tabs = [];
        this.init()
    }
    init = () =>{
      this.tabs = Array.from (this.$element.querySelectorAll('.menu__item'));
      this.tabs.forEach((tab)=>{
          tab.addEventListener('click',tabClickHandler.bind(this));
      })
    }
}
function tabClickHandler(){
    event.preventDefault();
    this.tabs.forEach((tab)=>{
        tab.classList.contains('menu__item_active') ? tab.classList.remove('menu__item_active') : null;
    })
    event.currentTarget.classList.add('menu__item_active');
}