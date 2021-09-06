import { Container, ContainerTitle, ContainerContent } from "../../DefaultComponentStyles/Container"
import Ask from "./components/Ask/Ask"
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
            <ContainerContent heigthSize="100%" widthSize="100%" display="flex" flexDirec="column" justCont="center" aliItems="center">
                <form onSubmit={handlerSumbit}>
                    <Container heigthSize="rem" margin="2rem auto" display="flex" justCont="center" aliItems="center" flexDirec="column">
                        <Input typeInput="user" margin="10px"/>
                        <Input typeInput="password" margin="10px"/>
                    </Container>
                    <Container heigthSize="3rem" margin="1rem auto" display="flex" justCont="center">
                        <Input typeInput="submit" margin="10px auto"/>
                    </Container>
                </form>
                <Ask></Ask>
            </ContainerContent>
        </Container>
    )
}

export default LogIn
