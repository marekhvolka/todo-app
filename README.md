## Project structure

There are three packages in this project - common, backend and fronted.
We are using yarn workspaces to share source code across this packages.
The main language in the whole project is Typescript.

To be able to run the project, you need to at first build the common packages.

### `common`

Consists of declaration of models (common classes, db entities), used in backend and frontend

### `backend`

A Node.js API build with Express.js, MongoDB, TypeORM.

### `frontend`

React based application with Redux, Redux sagas, Formik, styled-components.
