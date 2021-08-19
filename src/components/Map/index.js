import React, { useCallback, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';

import { usePoints } from '../../hooks/usePoints'

import {v4 as uuidv4} from 'uuid';

import PinOff from '../../assets/svg/PinOff.svg'
import Pin from '../../assets/svg/Pin.svg'
import Trash from '../../assets/svg/Trash.svg'
import { features } from '../../assets/json/Talhao.json'

import { ButtonAdd, ButtonDeleteAll, ButtonDeleteOnePin } from './styles'

const containerStyle = {
  width: '100vw',
  height: '89vh'
  };
  
  const initialCoordinates = {
    lat: -15.178993238568875,
    lng: -53.585003852844245
  };
  
  const onLoad2 = marker => {
    console.log('marker: ', marker)
  }
  
  const options = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "blue",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: true,
    editable: false,
    geodesic: false,
    zIndex: 1
  }

  const optionsMap = {
    disableDefaultUI: true
  }
  

export function Map () {
    const [map, setMap] = useState(null)
    const [markers, setMarkers] = useState([])
    const [coordinates, setCoordinates] = useState([])

    const { point, setPoint } = usePoints()

    const [idPointSelected, setIdPointSelected] = useState()

      useEffect(() => {
        function addTalhao() {
            const response = features.map(f => (
                f.geometry.coordinates[0]
            ))

           const coordinate = response.map((coordinates) => {
            return coordinates.map(c => {
                const coordinates = {
                  lat: c[1],
                  lng: c[0]
                }
                return coordinates
              })
            })

            setCoordinates(coordinate[0])
        }
        addTalhao()
    },[]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCMTLHRWGE0rmGRRdug9ca46YPZI54WA_M"
      })

      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])

      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])

      function createNewPoint() {
        setPoint((current) => [
          ...current,
          {
              id: uuidv4(),
              lat: -15.178993238568875,
              lng: -53.585003852844245,
              time: new Date()
          }
        ])
      }

      function updateLatLng (event, idMarkersDrag) { 
        setPoint(point.map((point) => point.id === idMarkersDrag 
        ? {...point, lat: event.latLng.lat(), lng: event.latLng.lng()}
        : {...point}
        ))
      }

      function deletePoint() {
        setPoint(point.filter(item => item.id !== idPointSelected))
      }

      function deleteAllPoint () {
        setPoint([])
      }

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={16}
                onLoad={onLoad}
                onUnmount={onUnmount}
                center={initialCoordinates}
                options={optionsMap}
            >
                <Polyline
                    path={coordinates}
                    options={options}
                 />

                {point.map((point) => (
                  <>
                  <Marker
                    key={point.id}
                    clickable={true}
                    draggable={true}
                    onDragEnd={(event) => updateLatLng(event, point.id)}
                    icon={PinOff}
                    position={{ lat: point.lat, lng: point.lng }}
                    onClick={() => setIdPointSelected(point.id)}
                  />
                </>
                ))}
                <ButtonDeleteOnePin onClick={() => deletePoint()}>
                  <p>Deletar pin</p>
                  <img src={Trash} alt="Ponto" />
                </ButtonDeleteOnePin>
                <ButtonAdd onClick={() => createNewPoint()}>
                  <p>Adicionar Novo</p>
                  <img src={Pin} alt="Ponto" />
                </ButtonAdd>
                <ButtonDeleteAll onClick={() => deleteAllPoint()}>
                  <p>Deletar tudo</p>
                  <img src={Trash} alt="Ponto" />
                </ButtonDeleteAll>

            </GoogleMap>

        </div>
     ) : <></>
}

const mystyle = {
    position: "absolute"
};

const mystyle2 = {
  position: "absolute",
  top: "500px"
};


const mystyle22 = {
  position: "absolute",
  top: "50px"
};