import styled from "styled-components"

const SecondaryTitle = styled.h3`
    font-family: ${(props) => props.theme.fontsFamily[props.fontFamily] || props.theme.fontsFamily["Roboto"]} ;
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => props.theme.colors[props.fontColor] || props.theme.colors['dark']};
`

export default SecondaryTitle
