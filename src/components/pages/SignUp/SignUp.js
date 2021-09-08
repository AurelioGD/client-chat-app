import { Container } from "../../DefaultComponentStyles/Container"
import BasicNav from "../../layouts/BasicNav/BasicNav"
import SignUpForm from "../../layouts/SignUpForm/SignUpForm"
const SignUp = () => {
    return (
        <Container widthSize="100%" heigthSize="100vh">
            <BasicNav/>
            <Container display="flex" justCont="center" widthSize="100%" heigthSize="70%"padding="2rem 0 0 0">
                <SignUpForm/>
            </Container>
        </Container>
    )
}

export default SignUp
