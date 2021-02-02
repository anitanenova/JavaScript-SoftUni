function create(words) {
  const contentElement = document.getElementById("content");

  for (let i = 0; i < words.length; i++) {
    const newContentWrapperElement = document.createElement("div");

    const newContentElement = document.createElement("p");
    newContentElement.textContent = words[i];
    newContentElement.style.display = "none";

    newContentWrapperElement.appendChild(newContentElement);

    contentElement.appendChild(newContentWrapperElement);
  }

  contentElement.addEventListener("click", function (e) {
    e.target.querySelector("p").style.display = "block";
  });
}
