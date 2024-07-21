let form = document.getElementById("contact");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let snackbar = document.getElementById("snackbar");
  snackbar.className = "show";

  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
    window.location.reload();
  }, 3000);
});
