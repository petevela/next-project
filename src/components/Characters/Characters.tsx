'use client'
import styles from './Characters.module.css'
import { Character } from '@/types/character.types'

type CharactersProps = {
    characters: Character[]
}

export const Characters = ({characters} : CharactersProps) => {
  return (
    <section className={styles.container}>
        <h1>Characters</h1>
        <div className={styles.character}>
            {
                characters.map((character) => (
                    <div key={character.id} className={styles.character}>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    </div>
                ))
            }
        </div>

    </section>
  )
}