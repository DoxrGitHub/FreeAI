const axios = require('axios');
const express = require('express');
const app = express();
const sendLlamaRequest = require('./sources/llama.js');
const sendOGPTRequest = require('./sources/llama.js');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

// remember to use parseInt()
// remember to use async for OGPT

app.post('/api', async (req, res) => {
  const message = req.body.message;
  const provider = req.body.provider;

  switch (provider) {
  case 'llama':
      const sysprompt = req.body.sysprompt;
      const temp = parseInt(req.body.temperature);
      const topP = parseInt(req.body.topP);
      const maxT = parseInt(req.body.maxTokens);
      const image = req.body.image;
      const response = sendLlamaRequest(message, sysprompt, temp, topP, maxT, image);
      res.send(response)
      break;
  case 'onlinegpt':
      const response = sendOGPTRequest(message);
      break;
  default:
      res.status(400).send('Invalid provider');
      return;
  }
})

app.listen(3000)