function encodeAndDecodeMessages() {
  let messageInputElement = document.getElementsByTagName("textarea")[0];
  let encodeButtonElement = document.getElementsByTagName("button")[0];

  let messageOutputElement = document.getElementsByTagName("textarea")[1];
  let decodeButtonElement = document.getElementsByTagName("button")[1];

  encodeButtonElement.addEventListener("click", function () {
    let message = messageInputElement.value;
    let encodedMessage = "";
    for (let i = 0; i < message.length; i++) {
      encodedMessage += String.fromCharCode(`${message.charCodeAt(i) + 1}`);
    }

    messageInputElement.value = "";
    messageOutputElement.value = encodedMessage;
  });

  decodeButtonElement.addEventListener("click", function () {
    let message = messageOutputElement.value;
    let decodedMessage = "";

    for (let i = 0; i < message.length; i++) {
      decodedMessage += String.fromCharCode(`${message.charCodeAt(i) - 1}`);
    }

    messageOutputElement.value = decodedMessage;
  });
}
