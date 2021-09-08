import { Container } from "../../DefaultComponentStyles/Container"
import BasicNav from "../../layouts/BasicNav/BasicNav"
import LogInForm from "../../layouts/LogInForm/LogInForm"
const LogIn = () => {
    return (
        <Container widthSize="100%" heigthSize="100%">
            <BasicNav/>
            <Container display="flex" justCont="center" widthSize="100%" padding="2rem 0 0 0">
                <LogInForm/>
            </Container>
        </Container>
    )
}

export default LogIn
