import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: ${({colorBG}) => colorBG};
  color: ${({textColor}) => textColor};
  border: 0;
  inline-size: fit-content;
  border-radius: 2rem;
  font: var(--button) ;
  text-transform: uppercase;
  padding-inline: 1.5rem;
  padding-block: .5rem;
  cursor: pointer;

  &:active{
    transform: scale(.9);
  }
`

function Button({colorBG="#A7DC50", text, textColor="#103611", onClick}) {
    return (
        <ButtonStyled colorBG={colorBG} textColor={textColor} onClick={onClick}>
            {text}
        </ButtonStyled>
    )
}

export default Button
