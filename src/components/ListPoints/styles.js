import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 9rem;
  left: 2.5rem;
  background: #ffffff;
  border-radius: 8px;
  width: 25rem;
  z-index: 2;
`;

export const Header = styled.div`
  background: #20252b;
  padding: 0.7rem;
  border-radius: 8px 8px 0 0;
  color: #ffffff;
  font-weight: bold;
`;

export const Body = styled.div`
  padding: 0.7rem;
  color: #20252b;

  span {
    text-align: center;
  }
`;

export const BodyEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 4rem;
  color: #20252b;
`;

export const BodyPoint = styled.div`
  display: flex;
  margin-bottom: 0.3rem;

  p {
    margin-left: 0.5rem;
  }
`;

export const BodyDate = styled.div`
  color: #bbbbbb;
`;
