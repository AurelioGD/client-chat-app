import { Container, ContainerImage } from "../../DefaultComponentStyles/Container"
import { Text } from "../../DefaultComponentStyles/Text"
import { Img } from "../../DefaultComponentStyles/Img"

const ShowUser = () => {
    return (
        <Container display="flex">
            <ContainerImage>
                <Img roundTrip={true} widthSize="50px" heigthSize="50px" objectFit="cover" src="https://imagenes.elpais.com/resizer/jKuS5a9sYLfxCRfia0s7aCs_h4w=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/EE6VABO6WBH4PPZOXWQODYFZ5M.jpg"/>
            </ContainerImage>
            <Text>EnriqueElPapu</Text>
        </Container>
    )
}

export default ShowUser
