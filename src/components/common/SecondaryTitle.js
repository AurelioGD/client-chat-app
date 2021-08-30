import styled from "styled-components"
import theme from "../theme/theme"

const SecondaryTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => theme[props.fontColor] || theme['dark']};
`


export default SecondaryTitle
