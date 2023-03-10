import confetti from "canvas-confetti";
import { useEffect, useState, useRef } from "react";
export default function UseGame(
  cards,
  reverseAll,
  initGame, 
  getRandomCards,
  changeMessage,
  setInitGame,
  cleanBoard){

  
    const [selectedCards, setSelectedCards] = useState([])
    const [statusGame, setStatusGame] = useState({
      coins: 0,
      lives: 5,
      score: 0,
    })

    const firstRender = useRef(0)
    const level = useRef(0)
    
    useEffect(()=>{

        if(initGame === 'cleanModal') {
          setTimeout(() => {
            setInitGame('pause')
           }, 350);
        }
        if( initGame === 'pause' ){
          firstRender.current === 0  & level.current === 0 ? changeMessage('Encuentra todos los pares e intenta completar el juego sin cometer errores.') :
          changeMessage(`${level.current >=1 ? '¡Felicidades!, sigue recolectando monedas' : 'Intentalo de nuevo'}`)  
          getRandomCards() 
        }
        if(initGame === 'start'){
          setTimeout(() => {
            reverseAll()
           }, 150);
        }
        if(initGame === 'reStart'){
          setStatusGame(prev => { return {...prev, score: 0} })
          setTimeout(() => {
            setInitGame('cleanModal')
          },900)
         
        }

      },[initGame])


    useEffect(()=>{
      if(statusGame.score >= 6){
        confetti()
        level.current += 1
        changeMessage('¡Felicidades!, tu memoria es increible 🤯 ')
        setInitGame('reStart')
      }
     
      if(statusGame.lives===0){
        changeMessage('¡Uppps!, te quedaste sin oportunidades. 😞')
        setInitGame('reStart')
        firstRender.current = 1
        level.current = 0      

        setStatusGame(prev => { return {...prev, lives: 3, coins: 0} })
      }

      if(selectedCards.length === 2){
        
        if(selectedCards[0].id === selectedCards[1].id){
          setStatusGame(prev => { return {...prev, coins: statusGame.coins + 100} })
          console.log(statusGame.coins)
          setStatusGame(prev => { return {...prev, score: statusGame.score + 1} })
          setSelectedCards([])
          changeMessage('¡Felicidades!, has encontrado un par. 👏🏻')
        }
        else{
          
          setTimeout(() => {
            setStatusGame(prev => { return {...prev, lives: statusGame.lives -= 1} })
            setSelectedCards([])
            cleanBoard(selectedCards)
            changeMessage('¡Cuidado!, ese no es el par correcto. 😞')

           }, 400);
         
        }
      }
    }, [selectedCards, statusGame, cards])


      return {selectedCards, setSelectedCards, statusGame}
}

