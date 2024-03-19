import { Component, h, State} from "@stencil/core";
@Component({
    tag:"my-layout",
    // styleUrl:'',
    shadow:true,
})
export class Layout{
    render(){
        return(
            <div>
                <my-header></my-header>
                <slot></slot>
                <my-footer></my-footer>
            </div>
        )
    }
}