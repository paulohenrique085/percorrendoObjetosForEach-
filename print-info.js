//objeto
const clientes = {
    nome: "Paulo",
    idade: 22,
    cpf: "123456789",
    email: "paulo@kakaka.com"

};

//criando chaves para objetos
const chaves = ["nome", "idade", "cpf", "email"];

//percorrendo objeto com forEach()

chaves.forEach(i => console.log(clientes[i]))