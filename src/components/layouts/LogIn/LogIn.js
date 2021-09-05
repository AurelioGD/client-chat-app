import { Container, ContainerTitle, ContainerContent } from "../../DefaultComponentStyles/Container"
import { Link } from "./LogInStyles"
import Input from "../../common/Input/Input"
import SecondaryTitle from "../../common/SecondaryTitle"
const LogIn = () => {

    const handlerChange = (e) => {

    }

    const handlerSumbit = (e) => {
        e.preventDefault()
        console.log("Form Submit")
    }
    return (
        <Container shadow="default">
            <ContainerTitle color="purple" display="flex" justCont="center" aliItems="center" widthSize="100%" heigthSize="70px">
                <SecondaryTitle fontColor="white" fontSize="24px">Enter</SecondaryTitle>
            </ContainerTitle>
            <ContainerContent>
                <form onSubmit={handlerSumbit}>
                    <Input typeInput="user" margin="50% 0px 20px 20px"/>
                    <Input typeInput="password" margin="20px"/>
                    <Input typeInput="submit" margin="40% 0px 0px 50%"/>
                </form>
                <Link href="/" fontColor="purpule">Sign up</Link>
            </ContainerContent>
        </Container>
    )
}

export default LogIn
