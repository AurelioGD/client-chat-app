import { Container, ContainerTitle, ContainerContent } from "../../DefaultComponentStyles/Container"
import Ask from "../../common/Ask/Ask"
import Input from "../../common/Input/Input"
import SecondaryTitle from "../../common/SecondaryTitle"
const SignUpForm = () => {


    const handlerSumbit = (e) => {
        e.preventDefault()
        console.log("Form Submit")
    }
    return (
        <Container shadow="default" heigthSize="35rem">
            <ContainerTitle color="purple" display="flex" justCont="center" aliItems="center" widthSize="100%" heigthSize="70px">
                <SecondaryTitle fontColor="white" fontSize="24px">Register</SecondaryTitle>
            </ContainerTitle>
            <ContainerContent heigthSize="100%" widthSize="100%" >
                <form onSubmit={handlerSumbit}>
                    <Container heigthSize="rem" margin="1rem auto" display="flex" justCont="center" aliItems="center" flexDirec="column">
                        <Input typeInput="name" margin="10px"/>
                        <Input typeInput="user" margin="10px"/>
                        <Input typeInput="email" margin="10px"/>
                        <Input typeInput="password" margin="10px"/>
                        <Input typeInput="password" margin="10px"/>
                    </Container>
                    <Container heigthSize="3rem" margin="0 auto" display="flex" justCont="center">
                        <Input typeInput="submit" margin="0 auto"/>
                    </Container>
                </form>
                <Ask to="/log-in" text="You have an account?" textLink="Log in"/>
            </ContainerContent>
        </Container>
    )
}

export default SignUpForm
