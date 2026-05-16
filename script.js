function getLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucesso, erro, {
      enableHighAccuracy: true // Solicita precisão máxima
    });
  } else {
    alert("Geolocalização não suportada no seu navegador.");
  }
}

function sucesso(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // Agora chama a API de clima
  getTemperatura(latitude, longitude);
}

function erro() {
  alert("Não foi possível obter sua localização.");
}
