// busca por dia
const getItinarios = () => [
  {
    id: 1,
    turno: 'MANHA',
    horarioInicio: '7:00',
    numeroPassageiros: 6,
    destinoFinal: 'Uniritter',
    descricao: 'Rota até a uniritter',
    status: 'CONCLUIDO',
  },
  {
    id: 2,
    turno: 'TARDE',
    horarioInicio: '12:00',
    numeroPassageiros: 8,
    destinoFinal: 'Garagem',
    descricao: 'Rota de retorno da uniritter',
    status: 'NAO_INICIADO',
  },
  {
    id: 3,
    turno: 'NOITE',
    horarioInicio: '19:00',
    numeroPassageiros: 15,
    destinoFinal: 'Uniritter',
    descricao: 'Rota de ida para a uniritter',
    status: 'NAO_INICIADO',
  },
  {
    id: 4,
    turno: 'NOITE',
    horarioInicio: '19:00',
    numeroPassageiros: 15,
    destinoFinal: 'Garagem',
    descricao: 'Rota de volta da uniritter',
    status: 'NAO_INICIADO',
  },
];

// Dados de um etinerario (1)
const getPassageirosItinerario = () => ({
  id: 1,
  descricao: 'Rota até a uniritter',
  destinoFinal: 'Uniritter',
  passageiros: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      coordinates: {
        latitude: -29.986797,
        longitude: -51.115147,
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
      coordinates: {
        latitude: -30.010883,
        longitude: -51.160388,
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
      coordinates: {
        latitude: -30.024924,
        longitude: -51.162926,
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
      coordinates: {
        latitude: -30.023824,
        longitude: -51.201528,
      },
    },
    {
      nome: 'Giovanna Sophia',
      tipo: 'PASSAGEIRO',
      endereco: {
        logradouro: 'Av. Praia de Belas',
        bairro: 'Praia de Belas',
        cidade: 'Porto alegre',
        numero: '1181',
        complemento: 'Praia de Belas',
        cep: '90110-001',
      },
      coordinates: {
        latitude: -30.04934,
        longitude: -51.227949,
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
      coordinates: {
        latitude: -30.084676,
        longitude: -51.247381,
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
      coordinates: {
        latitude: -30.080146,
        longitude: -51.218701,
      },
    },
  ],
});

export { getItinarios, getPassageirosItinerario, getDadosItinerario };
