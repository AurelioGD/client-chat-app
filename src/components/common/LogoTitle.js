import styled from "styled-components";
import theme from "../theme/theme";
const Title = styled.h1`
    font-family: "Lobster" ,cursive;
    color: ${props => theme[props.color]};
`
const LogoTitle = ({children = "ChatApp", fontColor="white"}) => <Title color={fontColor}>{children}</Title>

export default LogoTitle;