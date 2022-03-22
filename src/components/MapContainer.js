import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import { statesList } from '../utils/statesList'

const containerStyle = {
  borderRadius: '5px',
  width: '100%',
  height: '90%'
};

export default function MapContainer({local}) {

  const position = {
    lat: statesList[local][0],
    lng: statesList[local][1],
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCT0x3emTykuhb6PUp1Fau7NcoxAQgxQuQ"
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={6}
    >
      <Marker position={position}/>
    </GoogleMap>
  ) : <Box sx={{ 
        display:'flex', 
        height: '80%', 
        alignItems: 'center', 
        justifyContent: 'center', 
      }}>
        <CircularProgress />
      </Box>
}