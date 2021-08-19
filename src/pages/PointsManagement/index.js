import { Container } from './styles'
import { Header } from '../../components/Header'
import { ModalDeletePoint } from '../../components/ModalDeletePoint'
import { ListingPoints } from '../../components/ListPoints'
import { Map } from '../../components/Map'


export function PointsManagement () {
    return (
        <Container>
            <Header />
            <ListingPoints />
            <ModalDeletePoint />
            <Map />
        </Container>
    )
}