import styled from "styled-components"
export const defaultStyles = styled.div`
    height: 51px;
    `

export const Container = styled(defaultStyles)`
    display: flex;
    width: 300px;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 0px 3px 0px;
`

export const IconContainer = styled(defaultStyles)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #424242;
    width: 51px;
`
export const StyledInput = styled.input`
    font-size: 18px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 24.5px 5px 24.5px 12px;
    &:focus{
        outline: none;
    }
`