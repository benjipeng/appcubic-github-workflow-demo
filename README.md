# Github Workflow Demo

see `.github/workflows` for details

## Some notes on `pnpm`

> The are are two key uses of `npx`.

- Running executables inside the _downloaded_ dependencies

  - For example `npx jest`.
  - The pnpm _equivalent_ is `pnpm exec jest`.

- Running _executable_ commands in packages intended to download _transiently_
  - For example `npx create-react-app my-app`.
  - The pnpm equivalent of this is `pnpm dlx create-react-app my-app`.
