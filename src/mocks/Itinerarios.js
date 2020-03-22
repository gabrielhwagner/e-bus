// busca por dia
const getItinarios = () => [
  {
    id: 1,
    turno: 'MANHA',
    horarioInicio: '7:00',
    numeroPassageiros: 6,
    destinoFinal: 'Uniritter',
    descricao: 'Rota até a uniritter',
  },
  {
    id: 2,
    turno: 'TARDE',
    horarioInicio: '12:00',
    numeroPassageiros: 8,
    destinoFinal: 'Garagem',
    descricao: 'Rota de retorno da uniritter',
  },
  {
    id: 3,
    turno: 'NOITE',
    horarioInicio: '19:00',
    numeroPassageiros: 15,
    destinoFinal: 'Uniritter',
    descricao: 'Rota de ida para a uniritter',
  },
  {
    id: 4,
    turno: 'NOITE',
    horarioInicio: '19:00',
    numeroPassageiros: 15,
    destinoFinal: 'Garagem',
    descricao: 'Rota de volta da uniritter',
  },
];

// Dados de um etinerario (1)
const getPassageirosItinerario = () => ({
  id: 1,
  descricao: 'Rota até a uniritter',
  destinoFinal: 'Uniritter',
  passageiros: [
    {
      nome: 'Claudia Ramos',
      endereco: {
        logradouro: 'Rua magistério',
        bairro: 'Sarandi',
        cidade: 'Porto alegre',
        numero: '115',
        complemento: 'Prédio esquina',
        cep: '91140-300',
      },
    },
    {
      nome: 'Miguel Davi',
      endereco: {
        logradouro: 'Av. Assis Brasil',
        bairro: 'Cristo Redentor',
        cidade: 'Porto alegre',
        numero: '2611',
        complemento: 'Wallig',
        cep: '91010-004',
      },
    },
    {
      nome: 'Davi Miguel',
      endereco: {
        logradouro: 'Av. João Wallig',
        bairro: 'Passo dAreia',
        cidade: 'Porto alegre',
        numero: '1800',
        complemento: 'Iguatemi',
        cep: '91340-000',
      },
    },
    {
      nome: 'Sophia Giovanna',
      endereco: {
        logradouro: 'R. Olávo Barreto Viana',
        bairro: 'Moinhos de Vento',
        cidade: 'Porto alegre',
        numero: '36',
        complemento: 'Moinhos de Vento',
        cep: '90570-070',
      },
    },
    {
      nome: 'Giovanna Sophia',
      endereco: {
        logradouro: 'Av. Praia de Belas',
        bairro: 'Praia de Belas',
        cidade: 'Porto alegre',
        numero: '1181',
        complemento: 'Praia de Belas',
        cep: '90110-001',
      },
    },
    {
      nome: 'Helena Sophia',
      endereco: {
        logradouro: 'Av. Diário de Notícias',
        bairro: 'Cristal',
        cidade: 'Porto alegre',
        numero: '300',
        complemento: 'Barra',
        cep: '90810-080',
      },
    },
  ],
});

// Dados para iniciar um etinerario (1)
const getDadosItinerario = () => ({
  id: 1,
  turno: 'MANHA',
  horarioInicio: '7:00',
  numeroPassageiros: 6,
  destinoFinal: 'Uniritter',
  descricao: 'Rota até a uniritter',
  locais: [
    {
      nome: 'Claudia Ramos',
      tipo: 'PASSAGEIRO',
      endereco: {
        logradouro: 'Rua magistério',
        bairro: 'Sarandi',
        cidade: 'Porto alegre',
        numero: '115',
        complemento: 'Prédio esquina',
        cep: '91140-300',
      },
    },
    {
      nome: 'Miguel Davi',
      tipo: 'PASSAGEIRO',
      endereco: {
        logradouro: 'Av. Assis Brasil',
        bairro: 'Cristo Redentor',
        cidade: 'Porto alegre',
        numero: '2611',
        complemento: 'Wallig',
        cep: '91010-004',
      },
    },
    {
      nome: 'Davi Miguel',
      tipo: 'PASSAGEIRO',
      endereco: {
        logradouro: 'Av. João Wallig',
        bairro: 'Passo dAreia',
        cidade: 'Porto alegre',
        numero: '1800',
        complemento: 'Iguatemi',
        cep: '91340-000',
      },
    },
    {
      nome: 'Sophia Giovanna',
      tipo: 'PASSAGEIRO',
      endereco: {
        logradouro: 'R. Olávo Barreto Viana',
        bairro: 'Moinhos de Vento',
        cidade: 'Porto alegre',
        numero: '36',
        complemento: 'Moinhos de Vento',
        cep: '90570-070',
      },
    },
    {
      nome: 'Giovanna Sophia',
      endereco: {
        logradouro: 'Av. Praia de Belas',
        bairro: 'Praia de Belas',
        cidade: 'Porto alegre',
        numero: '1181',
        complemento: 'Praia de Belas',
        cep: '90110-001',
      },
    },
    {
      nome: 'Helena Sophia',
      tipo: 'PASSAGEIRO',
      endereco: {
        logradouro: 'Av. Diário de Notícias',
        bairro: 'Cristal',
        cidade: 'Porto alegre',
        numero: '300',
        complemento: 'Barra',
        cep: '90810-080',
      },
    },
    {
      nome: 'UniRitter campus zona sul',
      tipo: 'INSTITUICAO',
      endereco: {
        logradouro: 'Rua Orfanotrófio',
        bairro: 'Teresópolis',
        cidade: 'Porto alegre',
        numero: '555',
        complemento: 'Uniritter',
        cep: '90840-440',
      },
    },
  ],
});

export { getItinarios, getPassageirosItinerario, getDadosItinerario };
