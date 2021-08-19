import { usePoints } from '../../hooks/usePoints'

import {
    Container,
    Header,
    Body,
    BodyPoint,
    BodyDate
 } from './styles'

 import CultureIcon from '../../assets/svg/culture_icon.svg'

export function ListingPoints() {
    const { point } = usePoints()

    return (
        <Container>
            <Header>Listagem de pontos</Header>
           {point.map(point => (      
             <Body key={point.id}>
                <BodyPoint>
                    <img src={CultureIcon} alt="Icone de ponto" />
                    <p>Ponto nº 001</p>
                </BodyPoint>
                <BodyDate>
                    <p>{point.id}</p>
                </BodyDate>
            </Body>
             ))}
        </Container>
    )
}
