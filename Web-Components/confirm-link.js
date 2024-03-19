//if we are extending such kind of 'HTMLAnchorElement' then we need to extend in customelements
//like a(anchor),para,image 
class confirmLink extends HTMLAnchorElement{
    connectedCallback(){
        this.addEventListener('click',event=>{
            if(!confirm('Do you really want to cancel?')){
                //if we click cancel if will prevent 
                event.preventDefault();
            }
        })
    }
}
//if not specific ele
// customElements.define('uc-confirm-link',confirmLink)
// if it is specific ele
//a-anchor ele
customElements.define('uc-confirm-link',confirmLink,{extends:'a'});