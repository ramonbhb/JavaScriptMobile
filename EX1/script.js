function localizacao() {  
    let mapa = document.getElementById("map");      
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (location) {            
            mapa.innerHTML = "Latitude: " + location.coords.latitude + " Longitude: " +location.coords.longitude;
        });    
    } else {
          mapa.innerText = 'API de Geolocalização não suportada';
    }   
}