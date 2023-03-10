import styled from 'styled-components'
import Overlay from './overlay'

const ModalStyled = styled.div`
  margin: 0;
  padding: 0;
  border-radius: 1rem;
  position: fixed;
  margin-inline: 1rem;
  overflow: hidden;
  display: block;
  background: var(--white);

  .modal-template{
    padding: 1.5rem;
    min-inline-size: 30rem;
    min-block-size: 20rem;
    background-size: cover;

  }
  .content-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-template.loading{
    min-inline-size: 20rem;
    max-inline-size: fit-content; 
  }

  .modal-template.default{
    min-inline-size: 20rem;
    max-inline-size: 23rem;
    min-block-size: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .modal-template.loading{
    min-inline-size: 20rem ;
    max-inline-size: fit-content; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  
  }

  & {
    animation-duration: 4s;
  } 

  @keyframes loading {
    0% {transform:scale(1)}
    100% {transform:scale(1.3)}
    }

  .loading .txt{
    font: var(--headline1);
    color: var(--black-1);
    margin: 0;
    padding: 0;
  }

  .default .txt{
    margin: 0;
    padding: 0;
    color: var(--black-1);
    font: var(--body1-bold);
    text-align: center;
  }

`
function Modal({modal, template}) {
    if(modal.visible){
        return (
            <Overlay>
                <ModalStyled style={modal.template === 'loading' ? 
                { animation: 'loading', animationDuration: '2s' } 
                : null}>
                    {template}
                </ModalStyled>
            </Overlay>
        )
    }

    return null
  
      
    
  
}

export default Modal
