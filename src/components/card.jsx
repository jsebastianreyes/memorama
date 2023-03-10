import styled from 'styled-components'
import cardBack from '../assets/card-back.png'
import Icon from './icons'

const CardStyled = styled.article`
    color: var(--white);
    min-block-size: 24.6rem;
    overflow: hidden;
    cursor: pointer;
    -webkit-perspective: 1700;
    perspective: 1700;
    perspective-origin: center;
    .card{
        transition: all .6s;
        transform-style: preserve-3d;
	    box-shadow: 0px 0px 5px black;
	    position: absolute;
        block-size: 100%;
	    inline-size: 100%;
    }

    .card.reverse{
        transform: rotateY(180deg);
    }

    .card-content.is-front img{
        inline-size: 100%;
        /* border-radius: .5rem; */

    }

    .card-content{
        inline-size: 100%;
	    block-size: 100%;
        position: absolute;
        backface-visibility: hidden;
    }

    .card-content.is-back{
        transform: rotateY(180deg);
        background: var(--white);
        border-radius: .6rem;
        overflow: hidden;
    }

    .card-img{
        inline-size: 100%;
        block-size: 100%;
        object-fit: cover;
        object-position: center;
        /* border-radius: .5rem; */
    }

    .content-top{
      block-size: 220px;
      position: relative;
    }

    .content-bottom{
        padding: 1rem;
        font: var(--body1-regular);
        color: var(--black-1);
        display: flex;
        flex-direction: column;
        gap: 1rem;
       
    }

    .card-content.is-back{
        cursor: auto;
    }

    .info-specie{
        position: absolute;
        z-index: 2;
        background: var(--black-1);
        color: var(--white);
        border-radius: .5rem;
        padding: .3rem .6rem;
        text-transform: uppercase;
        font-family: Roboto;
        font-size: .6rem;
        margin: 0;
        line-height: .6rem;
        inset-block-start: 1rem;
        inset-inline-start: 1rem;
        font-weight: bold;
    }

    .info-name{
        font: var(--headline2);
        margin: 0;
       
    }

    .ellipsis{
        inline-size: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: pre;
    }

    .bg-icon{
        border-radius: 50%;
        block-size: 2.5rem;
        inline-size: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
    .bg-icon.is-yellow{
        background: var(--yellow);
    }

    .bg-icon.is-green{
        background: #3FCD65;
    }
    .bg-icon.is-blue{
        background: var(--blue);
    }

    .gender-status{
        display: flex;
        align-items: center;
    }

    .txt-icon{
        flex: 1;
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    p{
        margin: 0;
        padding: 0;
    }
  
 
`

function Card({card, index, selectedCards, changeBoard, setSelectedCards}) {
    function handleClick(){
        if(!card.selected){
            const newElement = structuredClone(selectedCards)
            newElement.push({...card, index, selected: true})
            setSelectedCards(newElement)
            changeBoard({...card, index})
        }
    }
    return (
        <CardStyled onClick={handleClick}>
            <div className={ card?.selected ? 'card reverse' : 'card' } >
                <div className="card-content is-front">
                    <img className="" src={cardBack} />
                </div>
                <div className="card-content is-back">
                    <div className="content-top">
                        {card.species ? <span className='info-specie'>{card.species}</span> : null }
                        <img className="card-img" src={card.image} />
                    </div>
                    <div className="content-bottom">
                    {card.name ? <h5 className='info-name ellipsis'>{card.name}</h5> : null }
                    <div className='gender-status'>
                        <p className='txt-icon'>
                            <span className='bg-icon is-yellow'><Icon name="location" size="24" /></span>
                            <span>{card.gender}</span>
                        </p>
                        <p className='txt-icon'>
                            <span className='bg-icon is-green'><Icon name="location" size="24" /></span>
                            <span>{card.status}</span> 
                        </p>
                    </div>
                    <div>
                    <p className='txt-icon'>
                            <span className='bg-icon is-blue'><Icon name="location" size="24" /></span>
                            <span className='ellipsis'> {card.location.name}</span>         
                    </p>
                  
                    </div>
                    </div>
                </div>
            </div>
        </CardStyled>
    )
}

export default Card
