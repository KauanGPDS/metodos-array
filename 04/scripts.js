const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function trocarElementos(array, posição1, posição2) {
 
    let temporário = array[posição1];
  

    array[posição1] = array[posição2];
  
   
    array[posição2] = temporário;
  }
  trocarElementos(pacientes,0,6)

  console.log(pacientes)