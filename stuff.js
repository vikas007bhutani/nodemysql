var events=require('events');
var myemitter=new events.EventEmitter();

myemitter.on('speak',function(mssg){

    console.log("what is msg"+mssg);
});

myemitter.emit('speak','why this is emitted');