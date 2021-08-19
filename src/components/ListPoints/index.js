import React from 'react';

import { format } from 'date-fns';
import { usePoints } from '../../hooks/usePoints';

import {
  Container,
  Header,
  Body,
  BodyPoint,
  BodyDate,
  BodyEmpty,
} from './styles';

import CultureIcon from '../../assets/svg/culture_icon.svg';

export default function ListingPoints() {
  const { point } = usePoints();

  return (
    <Container>
      <Header>Listagem de pontos</Header>
      {point.length ? (
        <>
          {point.map((marker) => (
            <Body key={marker.id}>
              <BodyPoint>
                <img src={CultureIcon} alt="Point icon" />
                <p>Ponto nº {marker.order}</p>
              </BodyPoint>
              <BodyDate>
                <p>
                  Criado em:{' '}
                  {format(new Date(marker.time), "dd/MM/yyyy 'às' HH:mm")}
                </p>
              </BodyDate>
            </Body>
          ))}
        </>
      ) : (
        <BodyEmpty>
          <span>Sem pontos de monitoramento para exibir no momento.</span>
        </BodyEmpty>
      )}
    </Container>
  );
}
