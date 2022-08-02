# NestJS/Next.js Turborepo

This is a monorepo with a NestJS API and a Next.js frontend.

## Setup

- `yarn` to install dependencies
- Create a local Postgres database (ie. `createdb nestjs-nextjs-turborepo`)
- Inject `cp .env.example .env` and update values, if necessary
- `yarn prisma:migrate:dev`

## Develop

- `yarn dev`
