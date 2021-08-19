import React, { useCallback, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polygon } from '@react-google-maps/api';
import {v4 as uuidv4} from 'uuid';

import { usePoints } from '../../hooks/usePoints'

import PinOff from '../../assets/svg/PinOff.svg'
import Pin from '../../assets/svg/Pin.svg'
import Trash from '../../assets/svg/Trash.svg'
import PinOn from '../../assets/svg/PinOn.svg'

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
  
  const optionsPolygon = {
    fillColor: "white",
    fillOpacity: 0.35,
    strokeColor: "white",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: true,
    editable: false,
    geodesic: false,
    zIndex: 1
  }

  const optionsMap = {
    disableDefaultUI: true,
    mapTypeId: 'satellite'
  }
  
export function Map ({ onOpenPointModal }) {
    const [map, setMap] = useState(null)
    const [coordinates, setCoordinates] = useState([])
    const [iconPin, setIconPin] = useState()

    const { point, setPoint, pointSelected, setPointSelected } = usePoints()

      useEffect(() => {
        function loadCoordinates() {
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
        loadCoordinates()
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
        setIconPin(event.domEvent.type)
        setPoint(point.map((point) => point.id === idPointDrag 
        ? {...point, lat: event.latLng.lat(), lng: event.latLng.lng()}
        : {...point}
        ))
      }

      function addMouseMoveInIconPin(event) {
        setIconPin(event.domEvent.type)
      }

      function onModalDeleteAllPoints() {
        setPointSelected(null)
        onOpenPointModal()
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
                <Polygon
                    path={coordinates}
                    options={optionsPolygon}
                 />
                {point.map((point) => (
                  <Marker
                    key={point.id}
                    draggable={true}
                    onDragEnd={(event) => updateLatLng(event, point.id)}
                    icon={iconPin === 'mousemove' ? PinOn : PinOff}
                    onDragStart={(event) => addMouseMoveInIconPin(event)}
                    position={{ lat: point.lat, lng: point.lng }}
                    onClick={() => setPointSelected(point.id)}
                  />
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
                <ButtonDeleteAll onClick={onModalDeleteAllPoints}>
                    <p>Deletar todos</p>
                    <img src={Trash} alt="Ponto" />
                  </ButtonDeleteAll>
               }
            </GoogleMap>
     ) : <></>
}