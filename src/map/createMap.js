import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiN2V2ZW51cCIsImEiOiJja2c5OW50NmMwbGh2MnJsczBwb3BuMXVoIn0.s6TgfUXLti8tEHE_QRbljg'

const createMap = container => {
  const map = new mapboxgl.Map({
    container: container,
    style: 'mapbox://styles/mapbox/streets-v11'
  })
}

export { createMap }