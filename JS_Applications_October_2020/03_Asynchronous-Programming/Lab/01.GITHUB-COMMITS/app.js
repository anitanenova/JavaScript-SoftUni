function loadCommits() {
  const commitsElement = document.getElementById("commits");
  const usernameInputElement = document.getElementById("username");
  const repoInputElement = document.getElementById("repo");

  const username = usernameInputElement.value;
  const repository = repoInputElement.value;

  const baseUrl = `https://api.github.com/repos/${username}/${repository}/commits`;

  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      let commits = data
        .map((x) => `<li>${x.commit.author.name}: ${x.commit.message}</li>`)
        .join(" ");

      commitsElement.innerHTML = commits;
    })
    .catch((err) => {
      commitsElement.innerHTML = `<li>Error: ${err.status} (${err.statusText})</li>`;
    });
}
