
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/apps/web/service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Erro ao registrar SW:", err));
}


document.getElementById("btn").addEventListener("click", async () => {
  const div = document.getElementById("api-response");

  try {
    
    const API = "http://localhost:3000/api/hello";
    const res = await fetch(API);

    const data = await res.json();

    div.textContent = "API respondeu: " + data.msg;
  } catch (e) {
    div.textContent = "Erro ao chamar API.";
  }
});
