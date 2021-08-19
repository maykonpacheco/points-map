import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 9rem;
    left: 2.5rem;
    background: #FFFFFF;
    border-radius: 8px;
    width: 25rem;
    z-index: 2;
`;

export const Header = styled.div`
    background: #20252B;
    padding: .7rem;
    border-radius: 8px 8px 0 0;
    color: #FFFFFF;
    font-weight: bold;
`;

export const Body = styled.div`
    padding: .7rem;
    color: #20252B;

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
    color: #20252B;

`;



export const BodyPoint = styled.div`
    display: flex;
    margin-bottom: .3rem;

    p {
        margin-left: .5rem;
    }
`;

export const BodyDate = styled.div`
    color: #BBBBBB;
`;

