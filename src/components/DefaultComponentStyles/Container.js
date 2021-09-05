import styled from "styled-components";

const DefaultContainerStyles = styled.div`
    display: ${(props) => props.display || "block"};
    flex-direction: ${(props) => props.flexDirec || "none"};
    justify-content: ${(props) => props.justCont || "none"};
    align-items: ${(props) => props.aliItems || "none"};
    width: ${(props) => props.widthSize || "374px"};
    height: ${(props) => props.heigthSize || "462px"};
    padding: ${(props) => props.padding || "0"};
    margin: ${(props) => props.margin|| "0"};
    background-color: ${(props) => props.theme.colors[props.color]};
    box-shadow: ${(props) => props.theme.shades[props.shadow] || "none"};
`

const Container = styled(DefaultContainerStyles)`
    
`;
const ContainerImage = styled(DefaultContainerStyles)`
    width: ${(props) => props.widthSize || "60px"};
    height: ${(props) => props.heigthSize || "60px"};
`
const ContainerTitle = styled(DefaultContainerStyles)`
    width: ${(props) => props.widthSize || "200px"};
    height: ${(props) => props.heigthSize || "50px"};
`
const ContainerContent = styled(DefaultContainerStyles)`
    width: ${(props) => props.widthSize || "200px"};
    height: ${(props) => props.heigthSize || "50px"};
`
export { Container, ContainerImage, ContainerTitle, ContainerContent };