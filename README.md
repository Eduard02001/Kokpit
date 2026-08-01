# Kokpit

Kokpit é um sistema de monitoramento de gastos financeiros e planejamento.
Monitora gastos a partir de extratos, controla pagamentos e, futuramente,
oferece insights para redução de gastos.

## Estrutura do projeto (monorepo)

- `backend/` — API em NestJS + TypeORM (SQL Server)
- `frontend/` — Aplicação React + TypeScript (Vite)

## Stack

- **Backend:** NestJS, TypeORM, SQL Server, class-validator
- **Frontend:** React, TypeScript, Vite, Zustand, React Router, Axios
- **Autenticação:** sessão via cookie (a implementar)

## Como rodar localmente

### Backend

```bash
cd backend
cp .env.example .env   # preencha os dados de conexão com o SQL Server
npm install
npm run start:dev
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Fluxo de branches

- `main`: branch estável
- `feature/*`: uma branch por funcionalidade, com merge para `main`
