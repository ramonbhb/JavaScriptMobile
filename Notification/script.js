// PRECISA RODAR EM UM SERVIDOR WEB HTTPS , LOCALHOST E NÃO EM ARQUIVO.

function requestPermission() {
  if (!('Notification' in window)) {
    alert('API de Notificação não suportada');
    return;
  }
  
  Notification.requestPermission(function (result) {    
  document.getElementById('status').innerText = result;
  });
}

function nonPersistentNotification() {
  if (!('Notification' in window)) {
    alert('API de Notificação não suportada');
    return;
  }
  
  try {
    var notification = new Notification("Notificação não persistente!");
  } catch (err) {
    alert('Erro na API' + err);
  }
}

function persistentNotification() {
  if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
    alert('API de Notificação Persistente não suportada');
    return;
  }
  
  try {
    navigator.serviceWorker.getRegistration()
      .then((reg) => reg.showNotification("Notificação Persistente"))
      .catch((err) => alert('Erro no serviceWorker ' + err));
  } catch (err) {
    alert('Erro na API' + err);
  }
}

window.onload = function() {  
  if ('Notification' in window) {
    status.innerText = Notification.permission;
  }
}