function getArticleGenerator(articles) {
  const contentElement = document.getElementById("content");

  return function () {
    if (articles.length > 0) {
      let articleElement = document.createElement("article");
      articleElement.textContent = articles.shift();

      contentElement.appendChild(articleElement);
    }
  };
}
