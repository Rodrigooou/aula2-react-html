import styled from 'styled-components'

const DivComp2 = styled.div`
    background-color: lightseagreen;
    border: 2px double lightgreen;

    h2{
        text-align: center;
        color: darkred;
    }

    p{
        text-align: justify;
        color: darkgreen;        
    }
`

export default function Component2(){
    return(
        <DivComp2>
            <h2>Componente 2</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </DivComp2>
    )
}