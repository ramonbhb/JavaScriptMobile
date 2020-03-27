window.onload = function() {
    let conexao = document.getElementById("conexao");
    document.getElementById("memoria").innerHTML = navigator.deviceMemory;
    if (navigator.onLine ? conexao.innerHTML = "Conectado" : conexao.innerHTML = "Desconectado" );
    document.getElementById("lingua").innerHTML = navigator.language;
    document.getElementById("useragent").innerHTML = navigator.userAgent;
}