import styled from 'styled-components'

const WrapperStyled = styled.div`
    max-inline-size: 74.5rem;
    padding-inline: 1.5rem;
    margin: auto;
`

function Wrapper({children}) {
    return (
        <WrapperStyled>
            {children}
        </WrapperStyled>
    )
}

export default Wrapper
