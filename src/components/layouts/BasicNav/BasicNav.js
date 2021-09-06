import { Container } from "../../DefaultComponentStyles/Container";
import LogoTitle from "../../common/LogoTitle"
const BasicNav = () => {
    return (
        <Container heigthSize="5rem" widthSize="100%" color="purple" display="flex" justCont="center" aliItems="center">
            <LogoTitle fontColor="white">ChatApp</LogoTitle>
        </Container>
    )
}

export default BasicNav;
