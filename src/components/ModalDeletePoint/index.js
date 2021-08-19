import Modal from 'react-modal'
import {
    Container,
    Header,
    ButtonClose,
    Body,
    Footer
 } from './styles'

 import Trash from '../../assets/svg/TrashRed.svg'
 import Close from '../../assets/svg/Close.svg'

export function ModalDeletePoint({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
                <Container>
                    <ButtonClose>
                         <img src={Close} alt="Icone para fechar" />
                    </ButtonClose>
                    <Header>
                        <h2>Excluir ponto selecionado?</h2>
                    </Header>
                    <Body>
                        <div>
                            <span>Atenção!</span>
                            <p>Essa ação não poderá ser desfeita.</p>
                        </div>
                    </Body>
                    <Footer>
                        <button>
                            <img src={Trash} alt="Botão de delete" />
                            <p>Excluir</p>
                        </button>
                        <span>cancelar</span>
                    </Footer>
                </Container>
        </Modal>
    )
}
