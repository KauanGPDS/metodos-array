const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const temp = pacientes[1]
pacientes[1] = pacientes[2]
pacientes[2] = temp
console.log(pacientes)
function agendar(array,nome){
    array.push(nome)
}

function atender(array){
    array.shift()
}

function cancelarAtendimento(array,nome){
    for(let i = 0; i<array.length;i++){
        if(array[i] == nome){
            array.splice(i,1)
            console.log(`Os Pacientes: ${array.join()} \n esse paciente cancelou ${nome}`)
        }
    }
}
agendar(pacientes,"Marcos")
atender(pacientes)
cancelarAtendimento(pacientes,"Maria")