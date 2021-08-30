import StyledButton from "./ButtonStyles"

const Button = ({ widthSize = "140px", heightSize = "50px", color = "purple", fontSize="14px", children, onClick }) => {

    const allColors = {
        "purple" : "#512DA8",
        "dark" : "#424242",
        "green" : "#00695C",
        "orange" : "#FF8F00"
    }

    const colorToUse = allColors[color] || allColors['purple']

    return <StyledButton widthSize={widthSize} heightSize={heightSize} color={colorToUse} onClick={onClick} fontSize={fontSize}>{children}</StyledButton>
}

export default Button
