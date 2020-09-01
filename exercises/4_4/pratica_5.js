/*
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) 
do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, 
Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: " último MacPatinhas",
    recorrente: "Sim"  
};

for (propriedades in info) {
    if ( 
        info[propriedades] === info.recorrente &&
        info[propriedades] === "Sim" &&
        info2[propriedades] === "Sim"
        ){
        console.log("Ambos recorrentes")
              
     } else {
         console.log(info[propriedades] +" e "+ info2[propriedades]);
     }
}