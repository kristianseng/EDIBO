
class TodayDateComponent extends HTMLElement {
    constructor() {
        super();
        setInterval(() => {
        this.innerText=new Date();
        }, 1000);
    }

}

/*

class TodayDateComponent extends HTMLElement {
    constructor() {
        super();
        fetch('https://jsonplaceholder.typicode.com/posts/posts/42')
            .then(j=>j.json())
            .then(text=>this.innerText = JSON.stringify(text))
    })
            

}




*/
const comp = customElements.define('today-date',TodayDateComponent);