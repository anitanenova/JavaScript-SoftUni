function attachEvents() {
  const url = "https://rest-messanger.firebaseio.com/messanger";

  const messagesAreaElement = document.getElementById("messages");
  const autorInputElement = document.getElementById("author");
  const contentInputElement = document.getElementById("content");
  const sendBtnElement = document.getElementById("submit");
  const refreshBtnElement = document.getElementById("refresh");

  sendBtnElement.addEventListener("click", () => {
    const autor = autorInputElement.value;
    const content = contentInputElement.value;

    const newMessage = {
      autor,
      content,
    };

    messagesAreaElement.textContent += `${autor}: ${content}\n`;

    fetch(url, {
      method: "post",
      body: JSON.stringify(newMessage),
    }).then((resolve) => resolve.json());

    autorInputElement.value = "";
    contentInputElement.value = "";
  });

  refreshBtnElement.addEventListener("click", () => {
    messagesAreaElement.textContent = "";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const currentMessages = Object.values(data);

        for (const message of currentMessages) {
          const author = message.author;
          const content = message.content;
          messagesAreaElement.textContent += `${author}: ${content}\n`;
        }
      });
  });
}

attachEvents();
