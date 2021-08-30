import styled from "styled-components";

const StyledButton = styled.button`
    width: ${props => props.widthSize};
    height: ${props => props.heightSize};
    background-color: ${props => props.color};
    font-size: ${props => props.fontSize};
    color: white; 
    border: none;
    cursor: pointer;
    font-family: "Roboto",sans-serif;
    &:hover{
        opacity: 0.9;
    }
`
export default StyledButton;