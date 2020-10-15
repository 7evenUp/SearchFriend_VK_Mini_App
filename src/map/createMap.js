import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiN2V2ZW51cCIsImEiOiJja2c5OW50NmMwbGh2MnJsczBwb3BuMXVoIn0.s6TgfUXLti8tEHE_QRbljg'

const createMap = (mapContainer, geoData) => {
  console.log('Map', geoData)
  const map = new mapboxgl.Map({
    container: mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    // lng: geoData.long ? geoData.long : '0',
    // lat: geoData.lat ? geoData.lat : '0'
  })

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  )
}

export { createMap }