import styled from "styled-components";

const Text = styled.p`
    font-family: ${(props) => props.theme.fontsFamily[props.fontFamily] || props.theme.fontsFamily["Roboto"]} ;
    color: ${props => props.theme.colors[props.fontColor] || props.theme.colors['dark']};
`
export { Text }