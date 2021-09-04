import styled from "styled-components";

const LogoTitle = styled.h1`
    font-family: ${(props) => props.theme.fontsFamily[props.fontFamily] || props.theme.fontsFamily["Lobster"]} ;
    color: ${props => props.theme.colors[props.fontColor] || props.theme.colors["dark"]};
`;
export default LogoTitle;
