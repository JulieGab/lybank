class Cliente{
    nome;
    cpf;
    agencia;
    saldo
}

const cliente1 = new Cliente(); 
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = 'Antônio';
cliente1.cpf = 23918309209;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = 'Mariana';
cliente2.cpf = 32318309287;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.nome = 'Joana';
cliente3.cpf = 28603792899;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1)