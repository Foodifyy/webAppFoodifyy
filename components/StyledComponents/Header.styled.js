import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    padding: 0.2em 0.6em;
    box-shadow: rgb(0 0 0 / 5%) 0px 6px 2px -4px;   
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LeftInnerContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SearchBar = styled.div`
    margin-left: 16px;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.colors.gray_100};
    padding: 0 6px 0 6px;
    border-radius: 16px;
    border: 2px solid #000000;
    height: 30px;
`

export const CenterInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-grow: 1; */
`
export const RightInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
`