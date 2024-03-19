import { Component, Prop, h } from "@stencil/core";
import {RouterHistory} from '@stencil/router';
@Component({
    tag:'my-navlink',
    styleUrl:'MyNavLink.css',
    shadow:true,
})
export class MyNavLink{
    @Prop() url:string;
    @Prop() history:RouterHistory;
    render(){
        return(
            <a href={this.url} class="nav-link" onClick={()=>this.navigateToUrl(this.url)}>
            <slot></slot>
            </a>
        )
    }
}