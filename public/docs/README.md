# Docs for Doxr_FreeAI

> You have choices between "Providers." They are the services used to get free AI.

List of current working providers
- [LLaMa2](https://llama2.ai) *[DEPENDABLE!]*
- [GPTChatly](https://gptchatly.com/)
- [OnlineGPT](https://onlinegpt.org)

# Quick usage example

> You have to send POST requests to /api kind of like with this body:

```
{
  "provider": "llama2",
  "system": "Be a helpful assistant."
  "message": "Hello AI!",
  "temperature": 0.75
}
```

There are different ways to send a request to the API, but if you want to test (or use normally!) the API, use that. Right now, LLaMa2 is the most dependable provider. 

> WARNING: since you aren't using the official OpenAI API yourself, using this API means that you are depending on other services to get AI. This introduces the risk that a provider might just stop working, or change in a way that Doxr_FreeAI didn't account for. Make sure that you are able to use other providers in case one fails. *Keep in mind that different providers have different ways that works; just changing a provider without changing the body is not recommended and definitely not advisable!*