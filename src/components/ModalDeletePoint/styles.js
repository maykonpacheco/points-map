import styled from 'styled-components';

export const Container = styled.div`
  color: #20252b;
`;

export const Header = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7f1;
  padding: 1rem 2rem;
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: end;
  background: #20252b;
  padding: 0.5rem;
  border-radius: 0.3rem 0.3rem 0 0;
`;

export const Body = styled.div`
  background: #f5f6fa;
  padding: 2rem;

  div {
    padding: 1rem;
    box-shadow: 0 0.3rem 0.5rem 0 rgb(61 66 80 / 25%);
    border-radius: 8px;

    span {
      font-weight: bold;
    }
  }
`;

export const Footer = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  button {
    display: flex;
    color: #d20200;
    padding: 0.7rem 1.5rem;
    border: 1px solid #d20200;
    font-weight: bold;
    border-radius: 4px;

    p {
      margin-left: 1rem;
    }
  }
`;

export const ButtonCancel = styled.div`
  cursor: pointer;
`;
