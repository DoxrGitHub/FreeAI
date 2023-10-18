const axios = require('axios')

function sendLlamaRequest(message, sysprompt="You are a helpful assistant.", temperature=0.75, maxTokens=800, topP=0.9, image=null) {
  const data = {
  "prompt": "[INST] " + message + " [/INST]\\n",
  "version": "d24902e3fa9b698cc208b5e63136c4e26e828659a9f09827ca6ec5bb83014381",
  "systemPrompt": sysprompt,
  "temperature": temperature,
  "topP": topP,
  "maxTokens": maxTokens,
  "image": image
};

axios({
  method: 'post',
  url: 'https://www.llama2.ai/api',
  headers: {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "text/plain;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"118\", \"Microsoft Edge\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "Referer": "https://www.llama2.ai/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  data: JSON.stringify(data)
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
}

module.exports = sendLlamaRequest;