import { Component,h } from "@stencil/core";
@Component({
    tag:"my-homepage",
    // styleUrl:"HomePage.css",
    shadow:true,
})
export class HomePage{
    render(){
        return(
            <div>
            <my-layout>
                    <my-card></my-card>
            </my-layout>
            </div>
        )
    }
}