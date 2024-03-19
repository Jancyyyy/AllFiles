// events

//1
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

// // publisher - subscriber pattern / observer pattern

// // providing event listener / event handlers for the someEvent
// ee.on('someEvent',function(){
//     console.log('Event has occured and handled too!');
// })

// // publish / raise the event
// ee.emit('someEvent');

// // 2 event data

// var usrData = new Object();
// usrData.id = 100;
// usrData.name = 'Sachin';

// ee.on('new-user',function(evt){
//     console.log('\nData along with event is :- '+
//     evt.id+' '+evt.name);
// })

// // raising an event along with event data
// ee.emit('new-user',usrData);


// // 3 multiple event listeners for the same event

ee.setMaxListeners(20);

ee.on('someEvent', function () { console.log('Event Listener 1!') });
ee.on('someEvent', function () { console.log('Event Listener 2!') });
ee.on('someEvent', function () { console.log('Event Listener 3!') });
ee.on('someEvent', function () { console.log('Event Listener 4!') });
ee.on('someEvent', function () { console.log('Event Listener 5!') });
ee.on('someEvent', function () { console.log('Event Listener 6!') });
ee.on('someEvent', function () { console.log('Event Listener 7!') });
ee.on('someEvent', function () { console.log('Event Listener 8!') });
ee.on('someEvent', function () { console.log('Event Listener 9!') });
ee.on('someEvent', function () { console.log('Event Listener 10!') });
ee.on('someEvent', function () { console.log('Event Listener 11!') });

// ee.emit('someEvent');


// // 4 only once

// // ee.on('firstConnection',function(){
// ee.once('firstConnection',function(){
//     console.log("You'll never see this again!");
// })

// ee.emit('firstConnection');
// ee.emit('firstConnection');


// // 5 removeListener

// ee.on('firstConnection',onlyOnce);

// function onlyOnce(){
//     console.log("You'll never see this again!");
//     ee.removeListener('firstConnection',onlyOnce);
// }

// ee.emit('firstConnection');
// ee.emit('firstConnection');

// // 6 removeAllListeners()

// ee.on('firstConnection', function () {
//     console.log("You'll never see this again!");
// })

// ee.emit('firstConnection');
// ee.emit('someEvent');

// //ee.removeAllListeners();
// ee.removeAllListeners('someEvent');

// ee.emit('firstConnection');
// ee.emit('someEvent');

// // 7 listeners

// ee.on('firstConnection',onlyOnce);

// function onlyOnce(){
//     console.log(ee.listeners('firstConnection'));
//     console.log("You'll never see this again!");
//     ee.removeListener('firstConnection',onlyOnce);
//     console.log(ee.listeners('firstConnection'));
// }

// ee.emit('firstConnection');

// console.log(ee.listeners('someEvent'));

// // 8 events module also has some built-in events
// // newListener - raised when you register the listener
//                 // to the event using - on, once
// // removeListener - raised when you remove the listener from the
//                 // event using removeListener method / removeAllListeners method


// // providing event listener to built-in events
// ee.on('newListener',function(evtName,fn){
//     console.log('New Event '+evtName);
//     console.log('New Listener '+fn)
// })

// ee.on('removeListener',function(evtName,fn){
//     console.log('Removed Event '+evtName);
//     console.log('Removed Listener '+fn)
// })

// function abc(){console.log('abc event listener!')}
// function abcII(){}
// function xyz(){console.oog('xyz event listener!')}

// ee.on('abcUser',abc);
// ee.on('abcUser',abcII);
// ee.removeListener('abcUser',abcII);
// //ee.on('xyzUser',xyz);

// 9 

var radium = new EventEmitter();

radium.on('radiation', function (ray) {
    console.log(ray);
})
setInterval(function () {
    radium.emit('radiation', 'GAMMA')
}, 1000)