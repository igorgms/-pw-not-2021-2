import * as React from 'react'

export default function Exercicio01() {
    const [name, setName] = React.useState('')

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div>  
            <form>
                <label htmlFor="name">Name: </label>   
                <input onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}