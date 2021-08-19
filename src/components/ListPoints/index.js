import { format } from 'date-fns';
import { usePoints } from '../../hooks/usePoints'

import {
    Container,
    Header,
    Body,
    BodyPoint,
    BodyDate,
    BodyEmpty
 } from './styles'

 import CultureIcon from '../../assets/svg/culture_icon.svg'

export function ListingPoints() {
    const { point } = usePoints()

    return (
        <Container>
            <Header>Listagem de pontos</Header>
            {point.length ? 
             <>
               {point.map(point => (      
                <Body>
                    <BodyPoint key={point.id}>
                        <img src={CultureIcon} alt="Point icon" />
                        <p>Ponto nº {point.order}</p>
                    </BodyPoint>
                    <BodyDate>
                    <p>Criado em: {" "} 
                    {format(
                        new Date(point.time),
                        "dd/MM/yyyy 'às' HH:mm",
                    )}
                    </p>
                    </BodyDate>
                </Body>
                ))} 
                </> :
             <BodyEmpty>
                 <span>Sem pontos de monitoramento para exibir no momento.</span>
             </BodyEmpty>
             }
        </Container>
    )
}
