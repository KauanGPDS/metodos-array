const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;


function imprirmirCarros(carros,posicao){
    let imprimirCarros = carros.slice(posicao)
    console.log(imprimirCarros.join())
}

imprirmirCarros(nomes,posicao)