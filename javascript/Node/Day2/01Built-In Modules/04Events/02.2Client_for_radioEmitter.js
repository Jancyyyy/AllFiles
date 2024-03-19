let Radio = require('./02.1radio_emitter');

var station = {
    freq:'93.5',
    name:'Radio Mirachi'
}

var radio = new Radio(station);


radio.on('play',function(station){
    console.log('"%s" %s FM Started \n',station.name,station.freq);
    let cnt = 0
    var interval = setInterval(function(){
        console.log('\t♫♫♫');
        if(++cnt === 5){
            clearInterval(interval);
            console.log('\nSong Ends \n');
            radio.emit('stop',station);    
        }
    },1000)
})

radio.on('stop',function(station){
    console.log('"%s" %s FM Stopped \n',station.name,station.freq);
});