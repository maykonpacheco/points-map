import React from 'react';

import Modal from 'react-modal';

import { usePoints } from '../../hooks/usePoints';

import {
  Container,
  Header,
  ButtonClose,
  Body,
  Footer,
  ButtonCancel,
} from './styles';

import Trash from '../../assets/svg/TrashRed.svg';
import Close from '../../assets/svg/Close.svg';

export default function ModalDeletePoint({ isOpen, onRequestClose }) {
  const { point, setPoint, pointSelected, setPointSelected } = usePoints();

  function deletePoint() {
    setPoint(point.filter((item) => item.id !== pointSelected));
    onRequestClose();
    setPointSelected(null);
  }

  function deleteAllPoint() {
    setPoint([]);
    onRequestClose();
    setPointSelected(null);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container>
        <ButtonClose>
          <img src={Close} alt="Icone para fechar" />
        </ButtonClose>
        <Header>
          <h2>
            {pointSelected
              ? 'Excluir ponto selecionado?'
              : 'Excluir todos os ponto?'}
          </h2>
        </Header>
        <Body>
          <div>
            <span>Atenção!</span>
            <p>Essa ação não poderá ser desfeita.</p>
          </div>
        </Body>
        {pointSelected ? (
          <Footer>
            <button type="button" onClick={() => deletePoint()}>
              <img src={Trash} alt="Delete button" />
              <p>Excluir</p>
            </button>
            <ButtonCancel type="button" onClick={onRequestClose}>
              cancelar
            </ButtonCancel>
          </Footer>
        ) : (
          <Footer>
            <button type="button" onClick={() => deleteAllPoint()}>
              <img src={Trash} alt="Delete button" />
              <p>Excluir</p>
            </button>
            <ButtonCancel type="button" onClick={onRequestClose}>
              cancelar
            </ButtonCancel>
          </Footer>
        )}
      </Container>
    </Modal>
  );
}
