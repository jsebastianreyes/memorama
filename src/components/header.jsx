import styled from 'styled-components'
import logo from '../assets/logo-rick-and-morty.png'
import Icon from './icons'
const HeaderStyled = styled.header`
    /* border: 2px solid yellow; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
    color: var(--white);
    font: var(--headline1);
    align-items: center;

    @media screen and (min-width: 768px){
        justify-content: space-between;
        
    }

    .content-right{
        display: flex;
        gap: 5rem;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .content-right p{
        margin: 0;
        padding: 0;

        display: flex;
        align-items: center;
        gap: .75rem;
    }
`

function Header({statusGame}) {
    return (
        <HeaderStyled>
            <div className="content-left">
                <img src={logo} alt="Logo de Rick And Morty" height="56" width="172.44"/>
            </div>
            <div className="content-right">
               <p><Icon name="coin" size={48} color={'var(--yellow)'}/>${statusGame.coins}</p>
               <p><Icon name="hearth" size={48} color={'var(--yellow)'}/>x{statusGame.lives}</p>
            </div>
        </HeaderStyled>
    )
}

export default Header
