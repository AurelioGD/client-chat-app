import styled from "styled-components"
import email from "../svgs/email.svg";
import name from "../svgs/name.svg";
import password from "../svgs/password.svg";
import user from "../svgs/user.svg";


const typeInputs = {
    name,
    email,
    user,
    password
}


const defaultStyles = styled.div`
    height: 51px;
    `

const Container = styled(defaultStyles)`
    display: flex;
    width: 300px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 0px 3px 0px;
`

const IconContainer = styled(defaultStyles)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #424242;
    width: 51px;
`
const InputContainer = styled.input`
    font-size: 18px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 24.5px 5px 24.5px 12px;
    &:focus{
        outline: none;
    }
`

const Input = ({typeInput='user', typeIcon, textPlaceholder}) => {

    const icon=typeInputs[typeInput]

    return (
        <Container>
            <IconContainer>
                <img src={icon} alt={typeInputs+" Icon"}/>
            </IconContainer>
            <InputContainer placeholder={`type your ${typeInput}...`} />       
        </Container>
    )
}

export default Input
