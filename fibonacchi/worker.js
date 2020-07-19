self.addEventListener('message', event =>{
    switch(event.data.command) {
        case 'fibonacchi':
            const result = fibonacchi(event.data.number);
            postMessage(result);
            break;
        default:
            break;
    }
});

function fibonacchi(i){
    if(i < 2) {
        return i;
    }
    return fibonacchi(i-2) + fibonacchi(i -1) ;
}
