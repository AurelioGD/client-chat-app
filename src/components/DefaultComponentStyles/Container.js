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
`

const Container = styled(DefaultContainerStyles)`
    
`;
const ContainerImage = styled(DefaultContainerStyles)`
    width: ${(props) => props.widthSize || "60px"};
    height: ${(props) => props.heigthSize || "60px"};
`
export { Container, ContainerImage };