import { useState } from 'react'

function Click(){
    const [variavel, setVariavel] = useState(0)
    function diminuir(){
        setVariavel(variavel - 1)
    }
    function somar(){
        setVariavel(variavel + 1)
    }
    return (
        <div>
            <button onClick={somar}>+</button>
            <h1>{variavel}</h1>
            <button onClick={diminuir}>-</button>
        </div>
    )
}


export default Click
