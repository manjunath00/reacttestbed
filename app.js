const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

class MessageService {
  constructor() {
    this.messages = [];
  }

  async find() {
    return this.messages;
  }

  async create(data) {
    const message = {
      id: this.messages.length,
      text: data.text
    }

    this.messages.push(message);
    return message;
  }
}

const app = express(feathers());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.configure(express.rest());

app.configure(socketio());

app.use('/messages', new MessageService());

app.use(express.errorHandler());

app.on('connection', connection => 
  app.channel('everybody').join(connection)
)

app.publish(data => app.channel('everybody'));

app.listen(3030).on('listening', () => 
  console.log('feathers server listening on local host: 3030')
)

app.service('messages').on('created', message => {
  console.log('A new message has been created ', message);
})

app.service('messages').create({
  text: 'Hello World from the server'
});
