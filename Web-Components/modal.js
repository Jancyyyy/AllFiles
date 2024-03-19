class Modal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
        //to start setting our innerHTML, so the template so to say, the HTML code of this custom component that is hidden away from the light DOM.
        this.shadowRoot.innerHTML = `
        <style>
            #backdrop{
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100vh;
                background:rgba(0,0,0,0.75);
                z-index:10;
                opacity:0;
                pointer-events:none;
                transition:all 0.3s ease-out;
            }
            :host([opened]) #backdrop,
            :host([opened]) #modal{
                opacity:1;
                pointer-events:all;
            }
            :host([opened]) #modal{
                top:15vh;
            }
            #modal{
                position:fixed;
                top:10vh;
                left:25%;
                width:60%;
                z-index:100;
                background:white;  
                border-radius: 6px;
                box-shadow:0 2px 8px rgba(0,0,0,0.26);
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                opacity:0;
                pointer-events:none;
            }
            header{
                padding:1rem;
                border-bottom:1px solid #ccc;
            }
            ::slotted(h1){
                font-size:20px;
                margin:0;
                text-align:center;
            }
            #main{
                padding:1rem;
            }
            #actions{
                border-top:1px solid #ccc;
                padding:1rem;
                display:flex;
                justify-content:flex-end;
            }
            #actions button{
                margin:0 0.26rem;
            }
        </style>
        <div id="backdrop"></div>
        <div id="modal">
        <header>
        <slot name="title">please confirm payment!</slot>
        </header>
        <section id="main">
        <slot></slot>
        </section>
        <section id="actions">
            <button id="cancel-btn">Cancel</button>
            <button id="confirm-btn">Okay</button>
        </section>
        </div>
        `;
        const slots = this.shadowRoot.querySelectorAll('slot');
        slots[1].addEventListener('slotchange', event => {
            console.dir(slots[1].assignedNodes());
        });
        const backdrop=this.shadowRoot.querySelector('#backdrop');
        const cancelButton = this.shadowRoot.querySelector('#cancel-btn');
        const confirmButton = this.shadowRoot.querySelector('#confirm-btn');
        //if we click outside of box it will cancel
        backdrop.addEventListener('click',this._cancel.bind(this));
        cancelButton.addEventListener('click', this._cancel.bind(this));
        confirmButton.addEventListener('click', this._confirm.bind(this));
        // cancelButton.addEventListener('cancel',()=>{
        //     console.log('Cancel inside the component');
        // });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'opened') {
            if (this.hasAttribute('opened')) {
                this.isOpen = true;
                //         this.shadowRoot.querySelector('#backdrop').style.opacity=1;
                //         this.shadowRoot.querySelector('#backdrop').style.pointerEvents='all';
                //         this.shadowRoot.querySelector('#modal').style.opacity=1;
                //         this.shadowRoot.querySelector('#modal').style.pointerEvents='all';
            }
        } else {
            this.isOpen = false;
        }
    }
    static get observedAttributes() {
        //what we gave in the setattribute
        return ['opened'];
    }
    open() {
        this.setAttribute('opened', '');
        this.isOpen = true;
    }
    hide() {
        if (this.hasAttribute('opened')) {
            this.removeAttribute('opened');
        }
        this.isOpen = false;
    }
    _cancel(event) {
        /*
        -creating an object based on classes
        -Bubbles allows us to define whether this event should bubble up or not,
         this means if it should only be available on the element we dispatched it 
         on or if it is not handled there,if it should go to the next 
         element in the DOM tree.
        */
        this.hide();
        const cancelEvent = new Event('cancel', {bubbles:true,composed:true});
        event.target.dispatchEvent(cancelEvent);
    }
    _confirm() {
        this.hide();
        const confirmEvent=new Event('confirm');
        this.dispatchEvent(confirmEvent);
    }
}
customElements.define('uc-modal', Modal)
//vh=viewport height
