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
  

export function Map ({ onOpenPointModal }) {
    const [map, setMap] = useState(null)
    const [coordinates, setCoordinates] = useState([])
    const { point, setPoint, pointSelected, setPointSelected } = usePoints()

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
              order: point.length + 1,
              lat: -15.178993238568875,
              lng: -53.585003852844245,
              time: new Date()
          }
        ])
      }

      function updateLatLng (event, idPointDrag) { 
        setPoint(point.map((point) => point.id === idPointDrag 
        ? {...point, lat: event.latLng.lat(), lng: event.latLng.lng()}
        : {...point}
        ))
      }

    return isLoaded ? (
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
                    onClick={() => setPointSelected(point.id)}
                  />
                </>
                ))}
                { pointSelected &&
                  <ButtonDeleteOnePin onClick={onOpenPointModal}>
                    <p>Deletar pin</p>
                    <img src={Trash} alt="Ponto" />
                  </ButtonDeleteOnePin>
                }
                <ButtonAdd onClick={() => createNewPoint()}>
                  <p>Adicionar Novo</p>
                  <img src={Pin} alt="Ponto" />
                </ButtonAdd>

               { point.length && 
                <ButtonDeleteAll onClick={onOpenPointModal}>
                    <p>Deletar tudo</p>
                    <img src={Trash} alt="Ponto" />
                  </ButtonDeleteAll>
               }
            </GoogleMap>
     ) : <></>
}