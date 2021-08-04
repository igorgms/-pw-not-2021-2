// Vetor
let carros = ['Celta', 'Uno', 'Gol']



// Objeto
let veiculo = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    cor: 'preto',
    ano: 1969
}

// Desestruturação de um objeto
// 1º regra: as variáveis devem ter o mesmo nome das propriedades
// 2º regra: a ordem não importa

let { cor, modelo, marca, ano } = veiculo

console.log('------------------------------------------')

console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)

// Para fazer a desestruturação parcial de objeto, basta criar variáveis correspondentes apenas as propriedades de interesse
