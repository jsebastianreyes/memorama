import styled from 'styled-components'
import { IconLocation, IconCoin, IconHearth } from './icons'


const IconStyled = styled.i`

`

function Icon({name, ...props}) {
    
    switch(name){
        case 'location': {
           return <IconLocation {...props}/>
        }
        case 'coin': {
            return <IconCoin {...props}/>
        }
        case 'hearth': {
            return <IconHearth {...props}/>
        }

        
    }
  
}

Icon.defaultProps = {
    size: 16,
    color: 'var(--black-1)',
  }

export default Icon
