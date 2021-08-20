import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerButton = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export const ButtonDeleteOnePin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d20200;
  padding: 0.8rem;
  border-radius: 4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  width: 100%;

  p {
    margin-right: 0.6rem;
    color: #ffffff;
  }
`;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 0.8rem 2.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  width: 100%;

  p {
    margin-right: 0.6rem;
    color: #20252b;
  }
`;

export const ButtonDeleteAll = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d20200;
  padding: 0.8rem;
  border-radius: 4px;
  text-transform: uppercase;
  margin-top: 1rem;
  width: 100%;

  p {
    margin-right: 0.6rem;
    color: #ffffff;
  }
`;
