import { Component ,h} from "@stencil/core";
@Component({
    tag:"my-delivery",
    // styleUrl:"Delivery.css",
    shadow:true,
})
export class Delivery{
    render(){
        return(
            <my-layout>
                <h6>This page will contain details of the products when they are delivered.</h6>
            </my-layout>
        )
    }
}