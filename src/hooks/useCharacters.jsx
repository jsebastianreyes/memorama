import { useState } from "react";
import { randomNumber } from "../utils/utils";
import { getRandomCharacters } from "../services/getRandomCharacters";

export default function UseCharacters(){
 
    const [cards, setCards]= useState([])

   async function getRandomCards(){
      
      const randomPage = randomNumber(1,42)
      const characters = await getRandomCharacters(randomPage)
      const start = randomNumber(1,13)
      const finish = start + 6
      const arrayCharacters = characters.data.results.slice(start, finish)
      const duplicateArrays = [structuredClone(arrayCharacters), structuredClone(arrayCharacters)]
      const flattened = duplicateArrays.flatMap(elem => elem)
      const randomOrderCards = flattened.sort(() => Math.random() - 0.5).map(card => {
        return {...card, selected: true}
      })
    
      setCards(randomOrderCards)
    }

    function changeBoard(item){
      const newBoard = structuredClone(cards)
      newBoard[item.index].selected = true
      setCards(newBoard)
    }
     function cleanBoard(items){
      const newBoard = structuredClone(cards)
      newBoard[items[0].index].selected = false
      newBoard[items[1].index].selected = false
      setCards(newBoard)
     }

     function reverseAll() {
      const board = structuredClone(cards)
      const cardVisible = board.map(card => {
        return {...card, selected: false}
      })

      setCards(cardVisible)

     }
    

    return {cards, getRandomCards, changeBoard, cleanBoard, reverseAll}
}
