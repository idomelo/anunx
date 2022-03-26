import Map, {Marker, NavigationControl} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { statesList } from '../utils/statesList'

export default function MapContainer({local}) {

  const position = {
    latitude: statesList[local][0],
    longitude: statesList[local][1],
    zoom: 5,
  }
  return (
    <Map
      initialViewState={position}
      style={{width: '100%', height: '80%', borderRadius: 5 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
    >
      <Marker longitude={position.longitude} latitude={position.latitude} color="red" />
      <NavigationControl />
    </Map>
  )
}