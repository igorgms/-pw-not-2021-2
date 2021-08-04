// let infoUsuario = {
//     usuario: 'Igor',
//     nomeCompleto: 'Igor Gomes Firmino',
//     grupo: 'alunos',
//     senha: '12345678'
// }

let usuario = 'Igor'
let nome = 'Igor Gomes Firmino'
let grupo = 'alunos'
let password = '12345678'


let infoUsuario = {
    usuario,
    nomeCompleto: nome,
    grupo,
    senha: password
}

console.log(infoUsuario)

// Exibindo o conteudo da variavel 'password' e 'grupo' para fins de depuração
console.log({ password, grupo })