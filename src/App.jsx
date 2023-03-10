import Layout from "./components/layout"
import Header from "./components/header"
import Board from "./components/board"
import Modal from "./components/modal"
import UseCharacters from "./hooks/useCharacters"
import UseModal from "./hooks/useModal"
import UseGame from "./hooks/useGame"
import { useState } from "react"


function App() {
  const [initGame, setInitGame] = useState('')
  const {template, modal, changeMessage} = UseModal(setInitGame)
  const {cards, getRandomCards, changeBoard, cleanBoard, reverseAll} = UseCharacters()
  const {setSelectedCards, selectedCards, statusGame} = UseGame(reverseAll, initGame, getRandomCards, changeMessage, setInitGame, cleanBoard)
    

  return (
   <Layout>
    <Modal modal={modal} template={template}/>
    <Header statusGame={statusGame}/>
    <Board changeBoard={changeBoard} cards={cards} setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>
   </Layout>
  )
}

export default App
