var mqtt = require ('mqtt')

//var client = mqtt.connect([{ host: 'localhost', port: 3000}])
var client  = mqtt.connect('mqtt://localhost:3000');

client.on('connect', function() {
	setInterval (function(){
        client.publish('myTopic', 'hello world!!!')
	    console.log('Mess sent')
	}, 5000)
})