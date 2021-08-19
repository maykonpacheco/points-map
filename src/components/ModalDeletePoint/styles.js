import styled from 'styled-components';

export const Container = styled.div`
    color: #20252B;
`;

export const Header = styled.div`
    background: #FFFFFF;
    border: 1px solid #e5e7f1;
    padding: 1rem 2rem;
`;

export const ButtonClose = styled.div`
    display: flex;
    justify-content: end;
    background: #20252B;
    padding: .5rem;
    border-radius: 0.30rem 0.30rem 0 0;
`;

export const Body = styled.div`
    background: #F5F6FA;
    padding: 2rem;

    div {
        padding: 1rem;
        box-shadow: 0 .3rem .5rem 0 rgb(61 66 80 / 25%);
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
        color: #D20200;
        padding: .7rem 1.5rem;
        border: 1px solid #D20200;
        font-weight: bold;
        border-radius: 4px;

        p {
            margin-left: 1rem
        }
    }

    span {
        font-size: 14px;
        cursor: pointer;
    }
`;
