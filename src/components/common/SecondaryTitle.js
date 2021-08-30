import styled from "styled-components"

const colors = {
    "white" : "#fff",
    "dark" : "#424242"
}

const SecondaryTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => colors[props.fontColor] || colors['dark']};
`


export default SecondaryTitle
