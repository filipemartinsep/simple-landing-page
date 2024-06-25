let form = document.getElementById("contact");

form.addEventListener("submit", (e) => {
  e.preventDefault(scroll);
  let message = document.getElementById("message");
  message.innerHTML = "Enviado com sucesso!";
  message.style.backgroundColor = "#d35757";
  message.style.borderRadius = "10px";

  setTimeout(() => {
    document.getElementById("message").innerHTML = "";
    window.location.reload();
  }, 1500);
});
