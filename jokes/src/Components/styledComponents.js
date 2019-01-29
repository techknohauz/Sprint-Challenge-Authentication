import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    margin-top: 75px;
`;

export const OuterBox = styled.div`
    position: fixed;
    margin: 0 auto;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
`;

export const Joke = styled.div`
    width: 75%;
    height: auto;
    font-size: 20px;
    margin: 50px 0;
`;

export const List = styled.ul`
    width: 800px;
    margin-left: 20%;
    margin-top: 0;
`;

export const JokeHeader = styled.h1`
    margin: 0 auto;
`;

export const Button = styled.button`
    width: 75%;
    height: 6vh;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    background-color: #020d1f;
    border: 2px solid #E55812;
    color: #E55812;
    border-radius: 5px;
    &:hover{
        background-color: #E55812;
        border: 2px solid #FDF0D5
        color: #FDF0D5;
    }
`;