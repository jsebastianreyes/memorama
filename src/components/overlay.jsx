import styled from 'styled-components'

const OverlayStyled = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(0,0,0, .5);
  position: fixed;
  inset: 0;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;
  block-size: 100%;
  inline-size: 100%;
`


function Overlay({children}) {
    return (
        <OverlayStyled>
            {children}
        </OverlayStyled>
    )
}

export default Overlay
