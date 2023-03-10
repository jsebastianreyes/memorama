import styled from 'styled-components'
import img from '../assets/background.png'
import Wrapper from './wrapper'

const LayoutStyled = styled.div`
  background-image: url(${img});
  min-block-size: 100vh ;
  background-size: cover;
  /* background-position: center; */
  background-attachment: fixed;
`

function Layout({children}) {
    return (
        <LayoutStyled>
            <Wrapper>
                {children}
            </Wrapper>
        </LayoutStyled>
    )
}

export default Layout
