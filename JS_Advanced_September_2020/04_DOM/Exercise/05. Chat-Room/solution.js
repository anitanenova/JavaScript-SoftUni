function solve() {
  let textareaElement = document.getElementById("chat_input");

  let chatMessagesElement = document.getElementById("chat_messages");

  let sendBtnElement = document.getElementById("send");

  sendBtnElement.addEventListener("click", function () {
    let newMessage = textareaElement.value;

    let myMessageElement = document.createElement("div");
    myMessageElement.classList.add("message");
    myMessageElement.classList.add("my-message");
    myMessageElement.innerHTML = newMessage;

    chatMessagesElement.appendChild(myMessageElement);

    textareaElement.value = "";
  });
}
