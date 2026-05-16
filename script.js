function getlocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            buscarClima(lat, lon);
        }, function(error) {
            document.getElementById("clima").innerHTML = "Ative a localizção!";
        });
    } else {
        document.getElementById("clima").innerHTML = "Geolocalização não suportada.";
    }

}

function buscarClima(lat, lon) {
    const key_API = "a8198020a3d558f814b41efaa9fe0bd7";
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key_API}&lang=pt_br`;

    fetch(API)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const temperatura = data.main.temp.toFixed(0);
            const cidade = data.name;
            const tempo = data.weather[0].description;

;
            document.getElementById("clima").innerHTML =
            `
            <p> Informações </p>
            
            ${cidade} 
            <br>
            ${temperatura} °C 
            <br> 
            ${tempo}`;

        })
        .catch(() => {
            document.getElementById("clima").innerHTML = "Erro ao buscar dados do clima.";
        });
}