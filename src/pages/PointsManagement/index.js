import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { ListingPoints } from '../../components/ListPoints'
import { Map } from '../../components/Map'
import { ModalDeletePoint } from '../../components/ModalDeletePoint'

import { Container } from './styles'

export function PointsManagement () {
    const [isPointModalOpen, setIsPointModalOpen] = useState(false);

    function handleOpenPointModal() {
      setIsPointModalOpen(true)
    }
  
    function handleClosePointModal() {
      setIsPointModalOpen(false)
    }

    return (
        <Container>
            <Header />
            <ListingPoints />
            <Map
               onOpenPointModal={handleOpenPointModal}
            />
            <ModalDeletePoint
              isOpen={isPointModalOpen}
              onRequestClose={handleClosePointModal}
            />
        </Container>
    )
}