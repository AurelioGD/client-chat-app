import { Container } from "../../DefaultComponentStyles/Container"
import { Text } from "../../DefaultComponentStyles/Text"
import { Link } from "./AskStyles";
const Ask = ({ to="/sign-up", text="Unknown",textLink="Unknown" }) => {
    return (
        <Container display="flex" heigthSize="3rem" aliItems="center" widthSize="100%" justCont="center">
            <Text>{text}</Text>
            <Link href={to} margin="0 0 0 0.2rem" fontColor="purple">{textLink}</Link>
        </Container>
    )
}

export default Ask;
