# NestJS/Next.js Turborepo

This is a monorepo with a NestJS API and a Next.js frontend, deployed to Railway.

## Prerequisites

- A Railway account with access to the `nestjs-nextjs-turborepo` project
- [Railway CLI](https://docs.railway.app/develop/cli)

## Setup

- `yarn` to install dependencies
- `railway login`
- `railway link` and select the `nestjs-nextjs-turborepo` project
- `railway run yarn prisma:migrate:dev`
  - Select the `env-vars` service

## Develop

- `railway run yarn dev`
  - Select the `env-vars` service
