<br />
<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo_roxa.png" alt="Logo">
  </a>

  <h3 align="center">E-bus</h3>
</p>

### Estrutura de rotas

```bash
Motorista
├── Login
└── App
    ├── Home
    ├── Itinerarios
    │   ├── Listagem
    │   ├── Mapa
    │   └── Pessoas
    └── Notificações
```
```bash
Passageiro
├── Login
└── App
    ├── Home - (motorista a caminho)
    ├── Meus horarios
    ├── A caminho
    │   ├── Dados
    │   ├── Localização
    └── Notificações
```

### Ideias

Home
  Opções com rotas 
  Ter notificações (#Notificações)

App - Itinerarios - Listagem

  Escolher dia - default dia atual

  Dados de cada itinerario
  Turno | horario de inicio | ver pessoas (#Pessoas) | ?Preview | Iniciar Rota 