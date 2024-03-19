const EventEmitter = require('events');

class Radio extends EventEmitter{
    station;
    constructor(station){
        super();
        this.station = station;
        this.start();
    }
    start(){
        setTimeout(()=>{
            this.emit('play',this.station);
        },0);
    }
    stop(){
        setTimeout(() =>{
            this.emit('stop',this.station);
        },6000);
    }
}

module.exports = Radio;