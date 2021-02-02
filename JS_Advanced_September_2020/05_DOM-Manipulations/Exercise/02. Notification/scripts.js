function notify(message) {
  const notificationBoxElement = document.getElementById("notification");
  notificationBoxElement.innerHTML = message;
  notificationBoxElement.style.display = "block";

  setTimeout(() => {
    notificationBoxElement.style.display = "none";
  }, 2000);
}
