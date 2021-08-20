import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
} from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';

import { usePoints } from '../../hooks/usePoints';

import PinOff from '../../assets/svg/PinOff.svg';
import Pin from '../../assets/svg/Pin.svg';
import Trash from '../../assets/svg/Trash.svg';
import PinOn from '../../assets/svg/PinOn.svg';

import { features } from '../../assets/json/Talhao.json';

import { ButtonAdd, ButtonDeleteAll, ButtonDeleteOnePin } from './styles';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const initialCoordinates = {
  lat: -15.178,
  lng: -53.585,
};

const optionsPolygon = {
  fillColor: 'white',
  fillOpacity: 0.35,
  strokeColor: 'white',
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: true,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const optionsMap = {
  disableDefaultUI: true,
  mapTypeId: 'satellite',
};

export default function Map({ onOpenPointModal }) {
  // const [, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [iconPin, setIconPin] = useState();

  const { point, setPoint, pointSelected, setPointSelected } = usePoints();

  useEffect(() => {
    function loadCoordinates() {
      const response = features.map((f) => f.geometry.coordinates[0]);

      const coordinate = response.map((coordinatesGeo) =>
        coordinatesGeo.map((c) => {
          const coordinatesList = {
            lat: c[1],
            lng: c[0],
          };
          return coordinatesList;
        }),
      );

      setCoordinates(coordinate[0]);
    }
    loadCoordinates();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  function createNewPoint() {
    setPoint((current) => [
      ...current,
      {
        id: uuidv4(),
        order: point.length + 1,
        lat: -15.178993238568875,
        lng: -53.585003852844245,
        time: new Date(),
      },
    ]);
  }

  function updateLatLng(event, idPointDrag) {
    setIconPin(event.domEvent.type);
    setIconPin('mousemove');
    setPoint(
      point.map((points) =>
        points.id === idPointDrag
          ? { ...points, lat: event.latLng.lat(), lng: event.latLng.lng() }
          : { ...points },
      ),
    );
  }

  function addMouseMoveInIconPin(event, id) {
    setPointSelected(id);
    setIconPin(event.domEvent.type);
  }

  function onModalDeleteAllPoints() {
    setPointSelected(null);
    onOpenPointModal();
  }

  function markTheSelectedPin(id) {
    setIconPin('mousemove');
    setPointSelected(id);
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={16}
      center={initialCoordinates}
      options={optionsMap}
    >
      <Polygon path={coordinates} options={optionsPolygon} />
      {point.map((points) => (
        <Marker
          key={points.id}
          draggable
          onDragEnd={(event) => updateLatLng(event, points.id)}
          icon={
            iconPin === 'mousemove' && points.id === pointSelected
              ? PinOn
              : PinOff
          }
          onDragStart={(event) => addMouseMoveInIconPin(event, points.id)}
          position={{ lat: points.lat, lng: points.lng }}
          onClick={() => markTheSelectedPin(points.id)}
        />
      ))}
      {pointSelected && (
        <ButtonDeleteOnePin onClick={onOpenPointModal}>
          <p>Deletar pin</p>
          <img src={Trash} alt="Point" />
        </ButtonDeleteOnePin>
      )}
      <ButtonAdd onClick={() => createNewPoint()}>
        <p>Adicionar Novo</p>
        <img src={Pin} alt="Point" />
      </ButtonAdd>

      {point.length && (
        <ButtonDeleteAll onClick={onModalDeleteAllPoints}>
          <p>Deletar todos</p>
          <img src={Trash} alt="Point" />
        </ButtonDeleteAll>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}
