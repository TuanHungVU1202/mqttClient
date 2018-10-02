var mqtt = require ('mqtt')

//var client = mqtt.connect([{ host: 'localhost', port: 3000}])
var client  = mqtt.connect('mqtt://localhost:3000');

client.on('connect', function () {
	client.subscribe('myTopic')
})


client.on('message', function(topic, message) {
	messageStr = message.toString()
	console.log(messageStr)
})