function attachEvents() {
  const url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

  const btnLoadElement = document.getElementById("btnLoad");
  const btnCreateElement = document.getElementById("btnCreate");

  const personInputElement = document.getElementById("person");
  const phoneInputElement = document.getElementById("phone");

  const listElement = document.getElementById("phonebook");

  btnCreateElement.addEventListener("click", createContact);

  btnLoadElement.addEventListener("click", loadContacts);

  function loadContacts() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const contacts = Object.values(data);

        for (const contact of contacts) {
          const name = contact.name;
          const phoneNumber = contact.phone;

          const deleteBtnElement = document.createElement("button");
          deleteBtnElement.textContent = "Delete";

          let listItemElement = document.createElement("li");
          listItemElement.textContent = `${name}: ${phoneNumber} `;
          listItemElement.appendChild(deleteBtnElement);
          listElement.append(listItemElement);

          deleteBtnElement.addEventListener("click", (e) => {
            const currentContact = e.target.parentNode;
            const contactInfo = currentContact.textContent
              .split(" ")
              .filter((x) => x !== "");

            const name = contactInfo[0];
            const number = contactInfo[1];
            let searchedId = "";

            const contactsIds = Object.keys(data);

            for (const id of contactsIds) {
              if (data[id].person === name && data[id].phone === number) {
                searchedId = id;
                break;
              }
            }

            currentContact.remove();

            const idUrl =
              "https://phonebook-nakov.firebaseio.com/phonebook" +
              "/" +
              searchedId +
              ".json";

            fetch(idUrl, {
              method: "delete",
              body: JSON.stringify(searchedId),
            }).then((resolve) => resolve.json());
          });
        }
      });
  }

  function createContact() {
    let name = personInputElement.value;
    let number = phoneInputElement.value;
    if (name && number) {
      let currentPerson = {
        name: name,
        phone: number,
      };

      console.log(currentPerson);

      fetch(url, {
        method: "post",
        body: JSON.stringify(currentPerson),
      }).then((res) => {
        res.json();
      });
    }

    listElement.innerHTML = "";
    loadContacts();
  }
}
attachEvents();
