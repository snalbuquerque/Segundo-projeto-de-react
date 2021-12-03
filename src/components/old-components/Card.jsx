import { useState, useEffect } from 'react';


function Card(){
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('')
    const [filterr, setFilterr] = useState([])


    useEffect(() => {
        fetch(' https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, []);

    useEffect(() => {
        setFilterr(
            characters.filter(character => {
                return character.name.includes(search)
            })
        )
    }

    )
    console.log(characters)

    return(
        <>
            <input placeholder="Digite o nome de um personagem" onChange={e => {setSearch(e.target.value)}}/>
           {filterr.map(person=>
            <div key={person.id}>
                <h2>{person.name}</h2>
                <img src={person.image} alt={person.name} />
            </div>
            )}
        </>
    )
};

export default Card