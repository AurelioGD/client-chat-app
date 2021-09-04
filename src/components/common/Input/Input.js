import email from "../../assets/svgs/email.svg";
import name from "../../assets/svgs/name.svg";
import password from "../../assets/svgs/password.svg";
import user from "../../assets/svgs/user.svg";
import { Container, IconContainer, StyledInput } from './inputStyles'

const typeInputs = {
    name,
    email,
    user,
    password
}

const Input = ({typeInput='user', typeIcon, textPlaceholder}) => {

    const icon = typeInputs[typeInput]

    return (
        <Container>
            <IconContainer>
                <img src={icon} alt={typeInputs+" Icon"}/>
            </IconContainer>
            <StyledInput placeholder={`type your ${typeInput}...`} />       
        </Container>
    )
}

export default Input
