import styled from "styled-components"

const Img = styled.img`
    width: ${(props) => props.widthSize || "200px"};
    height: ${(props) => props.heigthSize || "200px"};
    border-radius: ${ (props) => props.roundTrip ? "50%" : "0%" };
    object-fit: ${(props) => props.objectFit || "fill"};
`
export { Img }