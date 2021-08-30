import StyledButton from "./ButtonStyles"
import theme from "../../theme/theme"

const Button = ({ widthSize = "140px", heightSize = "50px", color = "purple", fontSize="14px", children, onClick }) => {

    const colorToUse = theme[color] || theme['purple']

    return <StyledButton widthSize={widthSize} heightSize={heightSize} color={colorToUse} onClick={onClick} fontSize={fontSize}>{children}</StyledButton>
}

export default Button
