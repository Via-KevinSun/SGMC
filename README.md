# SGMC — Sistema de Gestão e Monitoramento de Contentores

O **SGMC (Sistema de Gestão e Monitoramento de Contentores)** é uma aplicação **fullstack** desenvolvida para gerenciar e monitorar contentores em **portos, centros logísticos e operações de transporte**.

O sistema permite o controle completo de **contentores, motoristas, veículos, zonas e movimentações**, além de oferecer **autenticação de usuários e controle de acesso por permissões**.

O objetivo do projeto é **centralizar e organizar operações logísticas**, permitindo melhor rastreamento e gestão de ativos dentro de ambientes portuários ou centros de distribuição.

---

# Arquitetura do Sistema

O projeto segue uma arquitetura **Fullstack**, separando claramente as responsabilidades entre **frontend e backend**.

## Backend

O backend foi desenvolvido utilizando:

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL

O backend segue uma estrutura baseada em **Controllers, Services e Middlewares**, promovendo separação de responsabilidades e código mais organizado.

### Funcionalidades principais do backend

- API REST
- Autenticação com **JWT**
- Controle de acesso baseado em **roles**
- Integração com banco de dados via **Prisma**
- Validação de rotas autenticadas

---

## Frontend

O frontend foi desenvolvido utilizando:

- React
- Vite
- JavaScript (JSX)
- Context API para autenticação
- ESLint para padronização de código

A interface permite que usuários interajam com o sistema de forma simples para realizar operações de gestão e monitoramento.

---

# Funcionalidades Principais

O sistema oferece diversas funcionalidades para gerenciamento logístico.

## Gestão de Contentores

- Cadastro de contentores
- Listagem de contentores
- Atualização de dados
- Remoção de contentores

## Gestão de Motoristas

- Cadastro de motoristas
- Listagem
- Atualização
- Remoção

## Gestão de Veículos

- Cadastro de veículos
- Listagem
- Atualização
- Remoção

## Gestão de Zonas

- Cadastro de zonas logísticas
- Listagem
- Atualização
- Remoção

## Gestão de Movimentações

Permite registrar movimentações de contentores entre diferentes zonas.

- Registro de movimentação
- Histórico de movimentações
- Atualização
- Remoção

## Gestão de Usuários

- Cadastro de usuários
- Listagem de usuários
- Atualização
- Remoção
- Autenticação via JWT

## Licença

Este projeto está licenciado sob a licença MIT.

Veja o arquivo LICENSE para mais detalhes.

## Autor

**Kevin Sun**

Desenvolvedor de Software

GitHub:
https://github.com/Via-KevinSun
