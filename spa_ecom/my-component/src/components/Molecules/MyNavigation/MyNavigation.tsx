import { Component, h } from "@stencil/core";
// import { MyNav } from "../../atoms/MyNav";
// import { my-navlink } from "../../atoms/my-navlink";
@Component({
    tag:'my-navigation',
    styles:` color: white;`,
    shadow:true,
})
export class MyContainer{
    render(){
        return(
            <div class="Header-Content">
            <my-container>
            {/* <my-nav class="me-auto">
              <my-navlink url="/">HomePage</my-navlink>
              <my-navlink url="/Details">Details</my-navlink>
              <my-navlink url="/WhatsNew">WhatsNew</my-navlink>
              <my-navlink url="/Delivery">Delivery</my-navlink>
              <my-navlink url='Categories'>Categories</my-navlink>
            </my-nav> */}
            <my-nav>
              <my-nav-link url="/" history={history}>HomePage</my-nav-link>
              <my-nav-link url="/details" history={history}>Details</my-nav-link>
              <my-nav-link url="/whatsnew" history={history}>WhatsNew</my-nav-link>
              <my-nav-link url="/delivery" history={history}>Delivery</my-nav-link>
              <my-nav-link url="/categories" history={history}>Categories</my-nav-link>
              </my-nav>
          </my-container> 
          </div>
        )
    }
}
