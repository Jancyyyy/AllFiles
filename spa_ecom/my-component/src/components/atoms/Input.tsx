//Component-decorator
import { Component, Prop, h } from '@stencil/core';
//@Component-it is a decorator used to define a stencil comp.
@Component({
    //
    tag:'my-input',
    // styleUrl:'my-input.css',
    styles:`host {display: block}`,
    shadow:true,
})
export class MyInput{
    @Prop() name:string;

    render(){
        return <input type="text" placeholder='Search here' name={this.name} />;
    }
}