import cipher from './cipher.js';

const btnEncode = document.getElementById('encode-button');
const btnDecode = document.getElementById('decode-button');
const resultUserMessage = document.getElementById('result-user-message');

btnEncode.addEventListener('click', () => {
  const userMessage = document.getElementById('user-message').value;
  const userOffset = parseInt(document.getElementById('user-offset').value);
  // console.log('message: ', userMessage, ' offset: ', userOffset);
  // console.log(typeof userOffset);

  let messageEncode = cipher.encode(userOffset, userMessage);
  resultUserMessage.innerHTML = messageEncode;
})

btnDecode.addEventListener('click', () => {
  const userMessage = document.getElementById('user-message').value;
  const userOffset = parseInt(document.getElementById('user-offset').value);

  let messageDecode = cipher.decode(userOffset, userMessage);
  resultUserMessage.innerHTML = messageDecode;
})
