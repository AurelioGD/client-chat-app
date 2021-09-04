import styled from "styled-components";

const Container = styled.div`
    display: ${(props) => props.display || "block"};
    width: ${(props) => props.widthSize || "374px"};
    height: ${(props) => props.heigthSize || "462px"};
    padding: ${(props) => props.padding || "0"};
    margin: ${(props) => props.margin|| "0"};
`;
export default Container;