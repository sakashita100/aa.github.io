const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://localhost'); // ブローカーのURL

client.on('connect', () => {
  client.publish('test/topic', 'Hello MQTT');
  console.log('Message published');
  client.end();
});
