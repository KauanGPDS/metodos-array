const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;


function separarGrupo(numeroDepessoas,grupo){
    let igualarOnumero = numeroDepessoas
    let primeirGrupo = grupo.slice(0,igualarOnumero)
    let aleterarValorDois = grupo.slice(igualarOnumero)
   
    console.log(aleterarValorDois.join())
    console.log(primeirGrupo.join())
    
}

separarGrupo(tamanhoDoGrupo,nomes)