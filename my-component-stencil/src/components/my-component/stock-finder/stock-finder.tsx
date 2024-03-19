// import { Component, State, h,Event,EventEmitter} from "@stencil/core";
// import {AV_API_KEY} from '../../../global/global';
// import api from '../../../Services/api'

// @Component({
//     tag:'uc-stockfinder',
//     styleUrl:'stock-finder.css',
//     shadow:true
// })
// export class StockFinder{
//     stockNameInput:HTMLInputElement;
 
//     @State() searchResults:{symbol:string, name:string}[]=[];
//     @State() loading=false;
//     @Event({bubbles: true, composed:true}) mysymbolSelected: EventEmitter<string>;
   
//     async onFindStocks(event:Event){
//         event.preventDefault();
//         this.loading=true;
//         const stockName=this.stockNameInput.value;
//         let res=await api.getData(stockName);
//         console.log(res);
//         if(res){
//             this.searchResults=res["bestMatches"].map(match=>{
//                 return { name: match['2. name'], symbol:match['1. symbol']};
//                 });
//                 this.loading=false;
//         }
       
//         // fetch(
//         //     `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
//         // )
//         //     .then(res=>res.json())
//         //     .then(parsedRes=>{
//         //         // console.log(parsedRes);
//         //         this.searchResults=parsedRes["bestMatches"].map(match=>{
//         //             return { name: match['2. name'], symbol:match['1. symbol']};
//         //         })
//         //         console.log(this.searchResults);
//         //     })
//         //     .catch(err=>{
//         //         console.log(err);
//         //     }
//         //     );
//     }
 
//     onSelectSymbol(symbol:string){
//         this.mysymbolSelected.emit(symbol)
 
//     }
//     render(){
//         let content=
//             <ul>{this.searchResults.map(result=>(
//             <li onClick={this.onSelectSymbol.bind(this,result.symbol)}>
//               <strong>{result.symbol}</strong>-{result.name}
//             </li>
           
//         ))} </ul>;
//         if(this.loading){
//             content= <my-spinner/>
//         }
//         return[
//             <form onSubmit={this.onFindStocks.bind(this)}>
//                 <input
//                 id="stock-symobl"
//                 ref={el => (this.stockNameInput=el)}
//                 />
//                 <button type="submit">Find!</button>
//             </form>,
//             content
//         ];
//     }
// }
import { Component, State, h, Event, EventEmitter} from "@stencil/core";
import {AV_API_KEY} from '../../../global/global'
// import { EventEmitter } from "stream";
// import { result } from "@stencil/core/internal/utils";
@Component({
    tag:'uc-stockfinder',
    styleUrl:'stock-finder.css',
    shadow:true
})
export class StockFinder{
    stockNameInput:HTMLInputElement;

    @State() searchResults:{symbol:string, name:string}[]=[];
    @State() loading=false;
    @Event({bubbles:true, composed:true}) ucSymbolSelected: EventEmitter<string>

    onFindStocks(event:Event){
        event.preventDefault();
        this.loading=true;
        const stockName=this.stockNameInput.value;
        fetch(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
        )
            .then(res=>res.json())
            .then(parsedRes=>{
                // console.log(parsedRes);
                this.searchResults=parsedRes["bestMatches"].map(match=>{
                    return { name: match['2. name'], symbol:match['1. symbol']};
                })
                console.log(this.searchResults);
                this.loading=false;
            })
            .catch(err=>{
                console.log(err);
                this.loading=false;
            }
            );
    }
    onSelectSymbol(symbol:string){
        this.ucSymbolSelected.emit(symbol);
    }
    render(){
        let content=<ul>{this.searchResults.map(result=>(
            <li onClick={this.onSelectSymbol.bind(this, result.symbol)}>
                <strong>{result.symbol}</strong>-{result.name}
                </li>
        ))}
        </ul>
        
        if(this.loading){
            content=<uc-spinner></uc-spinner>
        }
        return[
            <form onSubmit={this.onFindStocks.bind(this)}>
                <input 
                id="stock-symobl"
                ref={el => (this.stockNameInput=el)}
                />
                <button type="submit">Find!</button>
            </form>,
                content
        ];
    }
}