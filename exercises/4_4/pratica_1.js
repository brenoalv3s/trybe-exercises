/*
Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

    Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
        Valor esperado no console: Bem-vinda, Margarida
    Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, 
    imprima o objeto no console.
    Valor esperado no console:

  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
*/


let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

  console.log("Bem-Vinda, " + info.personagem)