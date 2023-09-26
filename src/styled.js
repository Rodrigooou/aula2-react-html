import styled from 'styled-components'


export const DivComp1 = styled.div`
    background-color: lightblue;
    border: 2px solid blue;

    h2{
        text-align: center;
        color: darkgoldenrod;
    }

    p{
        text-align: justify;
        color: darkblue;
    }

`


export const Button = styled.button`
    background-color: ${(props) => props.$isOn ? "#00f" : "#f00"};
    border-radius: 10px;
    padding: 5px;
    color: white;
    border: none;

` 