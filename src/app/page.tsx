/*'use client'*/
import { Characters } from '@/components/Characters/Characters'
import { fetchCharacters } from '@/services/character.service'

export default async function Home() {
  const characters = await fetchCharacters() 
  
  return (
    <>
    <Characters characters={characters} />
    </>
  )
}
