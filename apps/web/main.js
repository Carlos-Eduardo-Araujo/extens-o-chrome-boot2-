if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("SW registrado"))
    .catch(err => console.error(err));
}

document.getElementById("btn").addEventListener("click", async () => {
  const div = document.getElementById("api-response");

  try {
    const res = await fetch("http://localhost:3000/api/hello");
    const data = await res.json();
    div.textContent = "API respondeu: " + data.msg;
  } catch {
    div.textContent = "Erro ao chamar API";
  }
});
