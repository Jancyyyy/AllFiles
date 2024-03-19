class ShowHide extends HTMLElement{
    constructor(){
        super();
        this._isvisible=false;
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
        <style>
        #info-box{
            display:none;
        }
        </style>
        <button>Show</button>
        <p id="info-box">
        <slot>more Infos!</slot>
        </p>
        `;
        this._toogleButton=this.shadowRoot.querySelector('button');
        this._infoBox=this.shadowRoot.querySelector('#info-box');
        this._toogleButton.addEventListener('click',this._toggleInfoBox.bind(this));
    }
    connectedCallback(){
        if(this.hasAttribute('is-visible')){
            if(this.getAttribute('is-visible')==='true'){
                this._isvisible=true;
                this._infoBox.style.display='block';
                this._toogleButton.textContent='Hide';
            }
        }
    }
    _toggleInfoBox(){
        this._isvisible=!this._isvisible;
        this._infoBox.style.display=this._isvisible ? 'block':'none';
        this._toogleButton.textContent=this._isvisible ? 'Hide':'Show';
    }
}
customElements.define('uc-show-hide',ShowHide);