import styled from 'styled-components'
import Card from './card'

const BoardStyled = styled.main`
  padding-block: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14.5rem, 17.5rem)) ;
  gap: 1.5rem;
  justify-content: center;

`

function Board({cards, setSelectedCards, selectedCards, changeBoard}) {
    return (
        <BoardStyled>
            {cards?.map((card ,index) => {
                return <Card key={index} card={card}  index={index} setSelectedCards={setSelectedCards} selectedCards={selectedCards} changeBoard={changeBoard}/>
            })}
        </BoardStyled>
    )
}

export default Board
