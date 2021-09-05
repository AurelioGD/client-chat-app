import styled from "styled-components";

const Link = styled.a`
    text-decoration: none;
    color:${(props) => props.theme.colors[props.fontColor] || "dark"};
    &:active,&:visited,&:link{
        color:${(props) => props.theme.colors[props.fontColor] || "dark"};
    }
`

export { Link }