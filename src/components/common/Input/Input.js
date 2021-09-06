import email from "../../assets/svgs/email.svg";
import name from "../../assets/svgs/name.svg";
import password from "../../assets/svgs/password.svg";
import user from "../../assets/svgs/user.svg";
import { IconContainer, StyledInput, InputSubmit } from './inputStyles'
import { Container } from "../../DefaultComponentStyles/Container";
const typeInputs = {
    name,
    email,
    user,
    password
}

const Input = ({typeInput='user', margin,children}) => {

    const icon = typeInputs[typeInput]

    if(typeInput==="submit") return ( <InputSubmit type="submit" margin={margin}>{children}</InputSubmit>)

    return (
        <Container margin={margin} widthSize="300px" heigthSize="50px" display="flex" shadow="default">
            <IconContainer>
                <img src={icon} alt={typeInputs+" Icon"}/>
            </IconContainer>
            <StyledInput type={typeInput==="user" || typeInput==="name" ? "text" : typeInput } placeholder={`type your ${typeInput}...`}/>       
        </Container>
    )
}

export default Input
