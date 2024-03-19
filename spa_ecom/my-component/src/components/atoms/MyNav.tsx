import { Component, h } from "@stencil/core";
@Component({
    tag:'my-nav',
    styleUrl:'MyNav.css',
    shadow:true,
})
export class MyNav{
    render(){
        return(
            <div class="me-auto">
                <slot></slot>
            </div>
        )
    }
}