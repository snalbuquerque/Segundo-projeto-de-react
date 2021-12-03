import { useState, useEffect} from 'react'

function SearchCharacter(){
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(' https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, [])

    useEffect(() => {
        characters.filter( character => {
            return character.name.includes(search)
        })
    }, [search, characters])
    return (
        <>
            <input placeholder="Digite o nome de um personagem" onChange={e => {setSearch(e.target.value)}}/>
           {characters.map(person=>
            <div key={person.id}>
                <h2>{person.name}</h2>
                <img src={person.image} alt={person.name} />
            </div>
            )}
        </>
    )
}


export default SearchCharacter 