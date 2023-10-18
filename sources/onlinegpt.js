const axios = require('axios')

async function sendOGPTRequest(message) {
  const url = 'https://onlinegpt.org/wp-json/mwai-ui/v1/chats/submit';
  const headers = {
    'accept': 'text/event-stream',
    'content-type': 'application/json',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin'
  };
  const data = {
    "id": null,
    "botId": "default",
    "newMessage": message,
    "stream": false
  };

  try {
    const respo = await axios.post(url, data, { headers: headers });
    return respo.data.reply;
  } catch (error) {
    return 'Error:' + error.message;
    console.log(error.message)
  }
}

module.exports = sendOGPTRequest;