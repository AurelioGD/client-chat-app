import styled from "styled-components"

export const defaultStyles = styled.div`
    height: 51px;
`;

export const InputSubmit = styled.input`
    display: "block";
    width: ${props => props.widthSize || "140px"};
    height: ${props => props.heightSize || "50px"};
    margin: ${props => props.margin || "0"};
    background-color: ${props => props.theme.colors[props.color] || props.theme.colors["purple"]};
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => props.theme.colors[props.fontColor] || props.theme.colors["white"]};; 
    border: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.fontsFamily[props.fontFamily] || props.theme.fontsFamily["Roboto"]} ;
    &:hover{
        opacity: 0.9;
    }
`

export const IconContainer = styled(defaultStyles)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors[props.color] || props.theme.colors["dark"]};
    width: 51px;
`
export const StyledInput = styled.input`
    font-size: 18px;
    border: none;
    font-family: ${(props) => props.theme.fontsFamily[props.fontFamily] || props.theme.fontsFamily["Roboto"]};
    margin: ${(props) => props.margin || "none"};
    font-weight: 700;
    padding: 24.5px 5px 24.5px 12px;
    &:focus{
        outline: none;
    }
`