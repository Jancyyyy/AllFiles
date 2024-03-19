import {Component} from '@stencil/core';

import {IonContainer,IonNav,IonNavLink} from '@ionic/core';
@Component({
  tag: 'my-header',
  styleUrl: 'Header.css',
  shadow: true,
})
export class CustomHeader {
 
  @State() currentPage: string = 'home';
 
  handlePageChange(page: string) {
    this.currentPage = page;
  }
 
  render() {
    return (
      <div class="custom-header">
        <div class="nav-class">
          <div class="header-border">
            <div class="header-name">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqfw-CbImdrHUYd0gxB5XYVMnjRL7dFqIiw&usqp=CAU"
                class="header-image"
              />
              <h1 class="Header-text">ShopCart</h1>
            </div>
            <div class="Header-Content">
              <div>
              {/* <IonContainer>
            <IonNav class="me-auto">
              <IonNavLink href="/">HomePage</IonNavLink>
              <IonNavLink href="/Details">Details</IonNavLink>
              <IonNavLink href="/WhatsNew">WhatsNew</IonNavLink>
              <IonNavLink href="/Delivery">Delivery</IonNavLink>
              <IonNavLink href="/Categories">Categories</IonNavLink>
            </IonNav>
          </IonContainer> */}
              {/* <my-container>
                <my-nav class="me-auto">
              <my-navlink url="/">HomePage</my-navlink>
              <my-navlink url="/details">Details</my-navlink>
              <my-navlink url="/dhatsNew">WhatsNew</my-navlink>
              <my-navlink url="/delivery">Delivery</my-navlink>
              <my-navlink url='categories'>Categories</my-navlink>
            </my-nav>
          </my-container>  */}
                    <my-navigation></my-navigation>
              </div>
            </div>
            <div>
              <my-searchbar></my-searchbar>
              {/* You may need to implement your SearchBar component here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}