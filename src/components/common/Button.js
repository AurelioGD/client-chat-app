import styled from "styled-components"

const Button = styled.button`
    width: ${props => props.widthSize || "140px"};
    height: ${props => props.heightSize || "50px"};
    background-color: ${props => props.theme.colors[props.color] || props.theme.colors["purple"]};
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => props.theme.colors[props.fontColor] || props.theme.colors["white"]};; 
    border: none;
    cursor: pointer;
    font-family: "Roboto",sans-serif;
    &:hover{
        opacity: 0.9;
    }
`

export default Button
