import { Component, h } from "@stencil/core";
@Component({
    tag:'my-container',
    styleUrl:'MyContainer.css',
    shadow:true,
})
export class MyContainer{
    render(){
        return(
            <div class="container">
                <slot></slot>
            </div>
        )
    }
}