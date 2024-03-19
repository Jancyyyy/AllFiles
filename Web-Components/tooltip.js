class Tooltip extends HTMLElement{
    //default method
    constructor(){
        super();
        //n this._tooltipContainer;
        this._tooltipIcon;
        this._tooltipVisible=false;
        this._tooltipText='some dummy tooltip text'
        this.attachShadow({mode: 'open'});
        // <slot>Some default</slot><span>(?)</span> taking this line from index.html(from template) and pasteing here
        //if we use backticks we can write mutliple lines of code
        this.shadowRoot.innerHTML=`
        <slot>Some default</slot>
        <style>
        div{
            font-weight:normal;
            background-color:black;
            position:absolute;
            top:1.5rem;
            left:0.75rem;
            color:white;
            z-index:10;
            padding:0.15rem;
            border-radius:10px;
            box-shadow:1px 1px 6px rgba(0,0,0,26);
        }
        .highlight{
            background-color:red;
        }
        ::slotted(.highlight){
            border-bottom:1px dotted red;
        }
        :host{
            position:relative;
        }
        :host(.important){
            background: var(--color-primary,yellow);
            padding :0.15rem;
        }
        :host-context(p){
            font-weight:bold;
            color:green
        }
        .icon{
            background:black;
            color:white;
            padding:0.15rem 0.15rem;
            text-align-center;
            border-radius:50%;
        }
        </style>
        <span class="icon">(?)</span>`;
        // const template=document.querySelector('#tooltip-template');
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        // console.log('It is working!');
    }
    connectedCallback(){
        if(this.hasAttribute('text')){
            this._tooltipText=this.getAttribute('text');
        }
        const tooltipIcon=this.shadowRoot.querySelector('span');
        // tooltipIcon.textContent='(?)';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave',this._hideTooltip.bind(this));
        // this.appendChild(tooltipIcon);
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position='relative';
        this._render();
    }
    attributeChangedCallback(name,oldValue,newValue){
        // console.log(name,oldValue,newValue);
        if(oldValue==newValue){
            return;
        }
        if(name==='text'){
            this._tooltipText=newValue;
        }
    }
    static get observedAttributes(){
        return ['text'];
    }
    disconnectedCallback(){
        // console.log('Disconnected!');
        this._tooltipIcon.removeEventListener('mouseenter',thia._showTooltip);
        this._tooltipIcon.removeEventListener('mouseleave',this._hideTooltip);
    }
    _render(){
        let tooltipContainer=this.shadowRoot.querySelector('div');
        if(this._tooltipVisible){
            tooltipContainer=document.createElement('div');
            tooltipContainer.textContent=this._tooltipText;
            this.shadowRoot.appendChild(tooltipContainer);

        }else{
            if(tooltipContainer){
            this.shadowRoot.removeChild(tooltipContainer);
        }
    }
    }
    _showTooltip(){
        //n this._tooltipContainer=document.createElement('div');
        // this._tooltipContainer.textContent='This is the tooltip text!';
        //n this._tooltipContainer.textContent=this._tooltipText;
        /*we are writing in style (div)
        this._tooltipContainer.style.backgroundColor='black';
        this._tooltipContainer.style.color='pink';
        this._tooltipContainer.style.position='absolute';
        this._tooltipContainer.style.zIndex='10';//if it is(500)if we keep cursor it will not show output('dummytext thing')
        */
        //n this.shadowRoot.appendChild(this._tooltipContainer);
        this._tooltipVisible=true;
        this._render();
    }
    _hideTooltip(){
        //n  this.shadowRoot.removeChild(this._tooltipContainer);
        this._tooltipVisible=false;
        this._render();
    }
}
//it is object which allows us to register our own custom elements and we do this uding define method
customElements.define('uc-tooltip', Tooltip);