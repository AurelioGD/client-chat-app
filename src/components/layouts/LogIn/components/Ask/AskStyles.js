import styled from "styled-components"
const Link = styled.a`
    margin: ${(props) => props.margin || "none"};
    text-decoration: none;
    color:${(props) => props.theme.colors[props.fontColor] || "dark"};
    &:active,&:visited,&:link{
        color:${(props) => props.theme.colors[props.fontColor] || "dark"};
    }
`
export { Link }