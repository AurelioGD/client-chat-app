import { Container, ContainerImage } from "../../DefaultComponentStyles/Container"
import { Text } from "../../DefaultComponentStyles/Text"
import { Img } from "../../DefaultComponentStyles/Img"
import profileUser from "../../assets/svgs/profileUser.svg" 

const ShowUser = ({ srcImg=profileUser, text="..."}) => {
    return (
        <Container display="flex" widthSize="120px" heigthSize="50px"  >
            <ContainerImage>
                <Img roundTrip={true} widthSize="50px" heigthSize="50px" objectFit="cover" src={srcImg}/>
            </ContainerImage>
            <Text>{text}</Text>
        </Container>
    )
}

export default ShowUser
