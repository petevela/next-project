import { CharacterResponse } from '@/types/character.types'

export const fetchCharacters = async() => {
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data:CharacterResponse = await response.json()
        return data.results
    }
    catch(error){
        throw new Error('Error en el llamado API')      
    }
}