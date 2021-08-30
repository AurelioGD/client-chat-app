import email from "../../svgs/email.svg";
import name from "../../svgs/name.svg";
import password from "../../svgs/password.svg";
import user from "../../svgs/user.svg";
import { Container, IconContainer, InputContainer } from './inputStyles'

const typeInputs = {
    name,
    email,
    user,
    password
}

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
