import { Component, h } from "@stencil/core";
@Component({
    tag:"my-details",
    styleUrl:"Details.css",
    shadow:true,
})
export class Details{
    render(){
        return(
            <my-layout>
                <h6>Details of the products can be found on this page.</h6>
            </my-layout>
        )
    }
}