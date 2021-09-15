import * as React from 'react'

export default function Exercicio02({ initialName = '' }) {
    // 🐨 initialize the state to the value from localStorage  
    // 💰 window.localStorage.getItem('name') || initialName
    const [name, setName] = React.useState(
        window.localStorage.getItem('name') || initialName
    )
    const [count, setCount] = React.useState(0)
    // 🐨 Here's where you'll use `React.useEffect`.  
    // The callback should set the `name` in localStorage.  
    // 💰 window.localStorage.setItem('name', name)  

    // Armazenando um item no localStorage chamado "name" o valor
    // da variável de estado nome
    React.useEffect(() => {
        window.localStorage.setItem('name', name)
        setCount(count + 1)
    }, [name])
    // useEffect tem dois parâmetros:
    // 1) É uma função que será atualizada depois de uma atualização do componente
    // 2) Vetor de dependências: qual ou quais as variáveis de estado que serão monitoradas para a execução do useEffect()

    function handleChange(event) {
        // A atualização da variável de estado "name" vai desencadear
        // uma atualização do componente. Após a atualização ter sido
        // processada, será executado o React.useEffect()
        setName(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
            <div>Quantidade de atualizações: {count}</div>
        </div>
    )
}