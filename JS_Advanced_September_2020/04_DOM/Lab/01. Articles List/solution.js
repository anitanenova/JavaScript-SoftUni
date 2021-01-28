function createArticle() {
  let titleInputElement = document.getElementById("createTitle");

  let titleElement = document.createElement("h3");
  titleElement.innerHTML = titleInputElement.value;
  titleInputElement.value = "";

  let contentInputElement = document.getElementById("createContent");

  let contentElement = document.createElement("p");
  contentElement.innerHTML = contentInputElement.value;
  contentInputElement.value = "";

  let articleElement = document.createElement("article");
  articleElement.appendChild(titleElement);
  articleElement.appendChild(contentElement);

  if (titleElement.innerHTML != "" && contentElement.innerHTML != "") {
    let articleSectionElement = document.getElementById("articles");
    articleSectionElement.appendChild(articleElement);
  }
}
