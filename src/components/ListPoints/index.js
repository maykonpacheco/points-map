import {
    Container,
    Header,
    Body,
    BodyPoint,
    BodyDate
 } from './styles'

 import CultureIcon from '../../assets/svg/culture_icon.svg'

export function ListingPoints() {
    return (
        <Container>
            <Header>Listagem de pontos</Header>
            <Body>
                <BodyPoint>
                    <img src={CultureIcon} alt="Icone de ponto" />
                    <p>Ponto nº 001</p>
                </BodyPoint>
                <BodyDate>
                    <p>Criado em: 12/08/2021 - 11:32</p>
                </BodyDate>
            </Body>
        </Container>
    )
}
