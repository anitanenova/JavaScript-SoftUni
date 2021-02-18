function attachEvents() {
  const url = "https://blog-apps-c12bf.firebaseio.com";

  const loadPostsBtnElement = document.getElementById("btnLoadPosts");
  const postsElement = document.getElementById("posts");
  const btnViewElement = document.getElementById("btnViewPost");

  const postTitleElement = document.getElementById("post-title");
  const postBodyElement = document.getElementById("post-body");
  const postCommentsElement = document.getElementById("post-comments");

  loadPostsBtnElement.addEventListener("click", () => {
    const postsUrl = url + "/posts.json";
    fetch(postsUrl)
      .then((res) => res.json())
      .then((data) => {
        const options = Object.keys(data)
          .map((key) => `<option value=${key}>${data[key].title}</option>`)
          .join("");
        postsElement.innerHTML = options;
      });
  });

  postsElement.addEventListener("change", (e) => selectOption(e));
  let selectedOption = "";

  function selectOption(e) {
    let optionId = e.currentTarget.value;
    selectedOption = optionId;

    return optionId;
  }

  let selectedOptionId = "";
  btnViewElement.addEventListener("click", () => {
    let postUrl = url + "/posts/" + selectedOption + ".json";
    fetch(postUrl)
      .then((res) => res.json())
      .then((data) => {
        postTitleElement.textContent = data.title;
        postBodyElement.textContent = data.body;

        selectedOptionId = data.id;

        getComments(selectedOptionId);
      });
  });

  function getComments(selectedOptionId) {
    let commentsUrl = url + "/comments.json";

    fetch(commentsUrl)
      .then((res) => res.json())
      .then((data) => {
        let comments = Object.values(data).filter(
          (x) => x.postId == selectedOptionId
        );
        let result = comments
          .map((x) => `<li id=${x.id}>${x.text}</li>`)
          .join("");

        postCommentsElement.innerHTML = result;
      });
  }
}

attachEvents();
