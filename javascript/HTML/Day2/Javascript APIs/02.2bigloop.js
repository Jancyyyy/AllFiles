var no = 0;

function bigLoop(){
    for(var i=0;i<1000000000;i++){
        no = i;
    }
}

bigLoop();
// Child thread communicate with Main/ UI thread
postMessage(no); // posts the message and raise a messag event