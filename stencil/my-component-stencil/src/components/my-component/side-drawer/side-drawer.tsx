import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() ShowContactInfo=false; 
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true,mutable:true }) opened: boolean;

  oncloseDrawer(){
    this.opened=false;
  }
  onContentChange(content:string){
    this.ShowContactInfo = content === 'contact';
  }
  @Method()
  open(){
    this.opened=true;
  }
  render() {
    let mainContent=<slot/>
    if(this.ShowContactInfo){
    mainContent=(
        <div id="contact-information">
            <h2>Contact Information!</h2>
            <p>You can reach us via phone or email.</p>
            <ul>
                <li>Phone:9812647452</li>
                <li>
                    E-Mail:{''}
                    <a href='mailto:something@something.com'>jancy123@gmail.com</a>
                </li>
            </ul>
        </div>
    );
    }
    return [
        <div class="backdrop" onClick={this.oncloseDrawer.bind(this)}/>,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.oncloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
            <button 
                        /* if it is not true */
            class={!this.ShowContactInfo ? 'active':''}
             onClick={this.onContentChange.bind(this,'nav')}>
                Navigation</button>
            <button
            class={!this.ShowContactInfo? 'active':''} 
            onClick={this.onContentChange.bind(this,'contact')}>Contact</button>
        </section>
        <main>
            {mainContent}
          {/* <slot/> */}
        </main>
      </aside>
    ];
  }
}
