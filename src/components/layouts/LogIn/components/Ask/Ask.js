import { Container } from "../../../../DefaultComponentStyles/Container"
import { Text } from "../../../../DefaultComponentStyles/Text"
import { Link } from "./AskStyles";
const Ask = () => {
    return (
        <Container display="flex" heigthSize="3rem" display="flex" aliItems="center" margin="10px auto" widthSize="auto">
            <Text>You do not have an account?</Text>
            <Link href="/register" margin="0 0 0 0.2rem">Sign up</Link>
        </Container>
    )
}

export default Ask;
