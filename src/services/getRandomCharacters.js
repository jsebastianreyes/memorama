import { randomNumber } from "../utils/utils";

export async function getRandomCharacters(numPage){
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${numPage}`)
    const data = await res.json()
    return {data}

}