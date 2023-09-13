const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function procuraPet(usuarios,nome){
    for(let i =0; i<usuarios.length;i++){
        if(usuarios[i].pets[i] == nome){
            console.log(`${usuarios[i].nome} é o dono de ${nome}`)
            break;
        }else{
            console.log("Nào Foi encontrado")
        }
    }
}

procuraPet(usuarios,"Max")