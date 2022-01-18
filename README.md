# FileManager

-   [FileManager](#filemanager)
    -   [Generate an application](#generate-an-application)
    -   [Generate a library](#generate-a-library)
    -   [Development server](#development-server)
    -   [Code scaffolding](#code-scaffolding)
    -   [Build](#build)
    -   [Running unit tests](#running-unit-tests)
    -   [Running end-to-end tests](#running-end-to-end-tests)
    -   [Understand your workspace](#understand-your-workspace)
    -   [Further help](#further-help)
    -   [How to start project](#how-to-start-project)
    -   [Api docs](#api-docs)
    -   [How to deploy](#how-to-deploy)   
    -   [TLDR](#tldr)



This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@file-manager/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:`API_PORT`/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## How to start project
-   install volta  via `curl https://get.volta.sh | bash`
-   have docker installed and started
-   run `npm install`
-   have valid `.env` file (you can use example env)
-   run `npm run dev:api`

## Api docs
-   docs are located `/api/docs`endpoint

## How to deploy

Well there are multiple ways to deploy an application so I will pretend that im giving a guidelines to devops team.

-   For starters this project uses [Volta](https://volta.sh/) as tool manager to handle node/npm version so it should be installed first
    via `curl https://get.volta.sh | bash`
-   Node and NPM versions are pinned in root `package.json` file and afer Volta is installed it automatically sets pinned versions in workspace.
-   With volta installed its time to install our `dependencies` via `npm install` .
-   Before running `build` command we shuld provide a valid `.env` file
-   After installation and with help of `Nx` we can build and test only affected parts of codebase via `npx nx affected --target=build` and `npx nx affected --target=test` commands.
-   For production build we use `npx nx build --prod` command
-   our database is allready dockerized
-   build output is located in `dist/apps/api` folder
-   after build is complete we run db migrations with `npx prisma migrate deploy` command
-   to start a built application we can run `main.js` file located in `dist/apps/api` folder either via `node` or u can use `pm2` process manager

## TLDR

-   this was very interesting thing to build. Especially if u try to dig deeper and explore design systems of google drive, dropbox, cloudinary,etc.. [one of iteresting articles I`ve read](https://chainerweb.com/design-dropbox/)
-
