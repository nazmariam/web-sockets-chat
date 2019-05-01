export class Username {
    constructor(selector){
        this.node = document.querySelector(selector);
    }

    onSubmit = (handler) => {
        this.node.parentNode.addEventListener('submit', event => {
            event.preventDefault();

            if(this.node.value) {
                handler(this.node.value);
            }
        })
    };

    render = value =>{
        this.node.value = value;
    }
}
