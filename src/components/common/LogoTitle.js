import styled from "styled-components";

const LogoTitle = styled.h1`
    font-family: "Lobster", cursive;
    color: ${props => props.theme.colors[props.fontColor] || props.theme.colors["dark"]};
`;
export default LogoTitle;
