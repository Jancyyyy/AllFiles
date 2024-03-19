import {Component , h, Prop} from '@stencil/core'

@Component({
    tag:'my-button',
    styleUrl:'Button.css',
    shadow:true,  
})
export class MyButton{
    @Prop() onClick:()=>void;
    render(){
        return(
            <div class='button-color'>
         <button onClick={this.onClick}>
            <slot>Add to Cart</slot>
        </button>
        </div>
        )
    }

}