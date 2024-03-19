import { Component, State, h, Element, Prop, Watch } from "@stencil/core";
 import {AV_API_KEY} from '../../../global/global';
@Component({
  tag: 'uc-stockprice',
  styleUrl: 'stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput:HTMLInputElement;
  // intialStockSymbol:string;
 
  @Element() el:HTMLElement;
 
  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid=false;
  @State() error:string
 
  @Prop({mutable:true, reflect:true}) stockSymbol : string;
 
  @Watch('stockSymbol')
  stockSymbolChanged(newValue:string, oldValue:string){
    if(newValue !== oldValue){
      this.stockUserInput=newValue;
      this.fetchStockPrice(newValue);
    }
  }
  onUserInput(event:Event){
    // this.stockUserInput=event.target.value;(in typescript it will give error for value so i am writing as HTMLInputElement)
    this.stockUserInput=(event.target as HTMLInputElement).value;
    if(this.stockUserInput.trim()!==''){
      this.stockInputValid=true;
    }else{
      this.stockInputValid=false;
    }
  }
 
  onFetchStockPrice(event: Event) {
 
    event.preventDefault();
    //without element we will get error
    // const stockSymbol=(this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
  this.stockSymbol=this.stockInput.value;
    // this.fetchStockPrice(stockSymbol);
    // console.log('Submitted!');
  }
 
  componentWillLoad(){
    console.log("Comp will load");
    console.log(this.stockSymbol);
  }
 
  componentDidLoad(){
    console.log("componentDidLoad");
    if(this.stockSymbol){
      // this.intialStockSymbol=this.stocksymbol;
        this.fetchStockPrice(this.stockSymbol);
        this.stockInputValid=true;
        this.fetchStockPrice(this.stockSymbol);

    }
  }
  componentWillUpdate(){
    console.log("Comp will Update");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
    // if(this.stocksymbol!==this.intialStockSymbol){
    //   this.intialStockSymbol=this.stocksymbol;
    //   this.fetchStockPrice(this.stocksymbol);
    // }

  }

  disconnectedCallback(){
    console.log("componentDidUnload");

  }
  fetchStockPrice(stockSymbol: string){
    fetch(
     
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
      )
      .then(res =>{
        if(res.status!== 200){
          throw new Error('Invalid');
        }
        return res.json();
      })
      .then(parsedRes=>{
          if(!parsedRes['Global Quote']['05. price']){
              throw new Error('Invalid Symbol');
          }
        this.error=null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price']
      })
      .catch(err=>{
      this.error=err.message;
       
      });
  }
 
  render() {
    let dataContent = <p>Please enter a symbol</p>
    if(this.error){
        dataContent=<p>{this.error}</p>
    }
    if(this.fetchedPrice){
        dataContent=<p>Price: ${this.fetchedPrice}</p>
    }
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stock-symbol"
        ref={el=>this.stockInput=el}
        value={this.stockUserInput}
        onInput={this.onUserInput.bind(this)}
        />
        <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
      </form>,
      <div>
        {dataContent}
      </div>
    ];
  }
}
//222222222222222222222222222222222

// import { Component, State, h, Element, Prop } from "@stencil/core";
//  import {AV_API_KEY} from '../../../global/global';
// @Component({
//   tag: 'uc-stockprice',
//   styleUrl: 'stock-price.css',
//   shadow: true
// })
// export class StockPrice {
//   stockInput:HTMLInputElement;
 
//   @Element() el:HTMLElement;
 
//   @State() fetchedPrice: number;
//   @State() stockUserInput: string;
//   @State() stockInputValid=false;
//   @State() error:string

//   @Prop() stockSymbol:string;

//   onUserInput(event:Event){
//     // this.stockUserInput=event.target.value;(in typescript it will give error for value so i am writing as HTMLInputElement)
//     this.stockUserInput=(event.target as HTMLInputElement).value;
//     if(this.stockUserInput.trim()!==''){
//       this.stockInputValid=true;
//     }else{
//       this.stockInputValid=false;
//     }
//   }
 
//   onFetchStockPrice(event: Event) {
 
//     event.preventDefault();
//     //without element we will get error
//     // const stockSymbol=(this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
//     const stockSymbol=this.stockInput.value;
//     //calling fetch stockprice
//     // this.fetchStockPrice(stockSymbol)
//     fetch(`      
//     https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
//     )
//     .then(res =>{
//       if(res.status!== 200){
//         throw new Error('Invalid');
//       }
//       return res.json();
//     })
//     .then(parsedRes=>{
//         if(!parsedRes['Global Quote']['05. price']){
//             throw new Error('Invalid Symbol');
//         }
//       this.error=null;
//       this.fetchedPrice = +parsedRes['Global Quote']['05. price']
//     })
//     .catch(err=>{
//     this.error=err.message;
//     });
//     console.log('Submitted!');
//   }

//   componentDidLoad(){
//     if(this.stockSymbol){
//       this.fetchStockPrice(this.stockSymbol);
//     }
//   }
//   fetchStockPrice(stockSymbol:string){
//      fetch(
//         `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
//     )
//     .then(res =>{
//       if(res.status!== 200){
//         throw new Error('Invalid');
//       }
//       return res.json();
//     })
//     .then(parsedRes=>{
//         if(!parsedRes['Global Quote']['05. price']){
//             throw new Error('Invalid Symbol');
//         }
//       this.error=null;
//       this.fetchedPrice = +parsedRes['Global Quote']['05. price']
//     })
//     .catch(err=>{
//     this.error=err.message;
//     });
//   }

//   render() {
//     let dataContent = <p>Please enter a symbol</p>
//     if(this.error){
//         dataContent=<p>{this.error}</p>
//     }
//     if(this.fetchedPrice){
//         dataContent=<p>Price: ${this.fetchedPrice}</p>
//     }
//     return [
//       <form onSubmit={this.onFetchStockPrice.bind(this)}>
//         <input id="stock-symbol"
//         ref={el=>this.stockInput=el}
//         value={this.stockUserInput}
//         onInput={this.onUserInput.bind(this)}
//         />
//         <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
//       </form>,
//       <div>
//         {dataContent}
//       </div>
//     ];
//   }
// }


//1111111111111111111111111111111
// import { Component, State, h, Element } from '@stencil/core';
// import { AV_API_KEY } from '../../../global/global';
// @Component({
//   tag: 'uc-stockprice',
//   styleUrl: 'stock-price.css',
//   shadow: true,
// })
// export class StockPrice {
//   stockInput: HTMLInputElement;

//   @Element() el: HTMLElement;

//   @State() fetchedPrice: number;
//   @State() stockUserInput: string;
//   @State() stockInputValid = false;
//   @State() error:string;
//   onUserInput(event: Event) {
//     // this.stockUserInput=event.target.value;(in typescript it will give error for value so i am writing as HTMLInputElement)
//     this.stockUserInput = (event.target as HTMLInputElement).value;
//     //trim-remove excess white spaces,length >0 (or) should not empyt(' ');
//     if (this.stockUserInput.trim() !== '') {
//       this.stockInputValid = true;
//     } else {
//       this.stockInputValid = false;
//     }
//   }

//   onFetchStockPrice(event: Event) {
//     event.preventDefault();
//     //without element we will get error
//     // const stockSymbol=(this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
//     //instead of exracting stocksymbol we can extract stocksymbol using stockinput value;
//     const stockSymbol = this.stockInput.value;
//     fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`) //some errors like 404,500 not handled by catch so we get response
//       //we are gettingg 200 error response
//       .then(res => {
//         if (res.status !== 200) {
//           throw new Error('Invalid!');
//         }
//         //we will get response
//         return res.json();
//       })
//       .then(parsedRes => {
//         if(!parsedRes['Global Quote']['05. price']){
//           throw new Error('Invalid Symbol!');
//         }
//         this.error=null;
//         //we are getting price
//         this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
//       }) //it will catch any errore that occur
//       .catch(err => {
//         this.error=err.message;
//         // console.log(err);
//       });
//     // console.log('Submitted!');
//   }

//   render() {
//     let dataContent=<p>Price: ${this.fetchedPrice}</p>
//     if(this.error){
//       dataContent=<p>{this.error}</p>
//     }
//     return [
//       <form onSubmit={this.onFetchStockPrice.bind(this)}>
//         <input
//           id="stock-symbol"
//           //ref takes func as arg where we will get ele
//           ref={el => (this.stockInput = el)}
//           value={this.stockUserInput}
//           onInput={this.onUserInput.bind(this)}
//         />
//         <button type="submit" disabled={!this.stockInputValid}>
//           Fetch
//         </button>
//       </form>,
//       <div>
//         {/* <p>Price: ${this.fetchedPrice}</p> */}
//         <p>{dataContent}</p>
//       </div>,
//     ];
//   }
// }
