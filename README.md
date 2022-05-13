# Holaluz frontend and backend-for-frontend test

The requirements and specifications of this test are expeined in `TEST_REQUIREMENTS.md` file

## Project setup

Open a terminal a type:

```
git clone https://github.com/miguelgc95/holaluz-frontend-and-bff-test.git
cd holaluz-frontend-and-bff-test
```

An API has been created using express with node and MongoDB has database.

In order to test this locally, install [MongoDB](https://www.mongodb.com/docs/manual/installation/) and
[mongo-shell](https://www.mongodb.com/try/download/shell).

### Seed the data base:

1. Go again to your terminal and type:
   `mongo`
   (this will open the mongo-shell terminal)
2. in `./packages/backend/src/db/manualInsertions` you will find two files which you should cope and paste in the mongo terminal
3. Close the mongo terminal by typing `exit`

### Intall dependencies:

```
yarn
```

### Start backend

```
yarn backend
```

### Start frontend

Open a new terminal in the root of the project and type:

```
yarn frontend
```

### Go to your prefered browser by [clicking this link](http://localhost:8080/landing-page) and enjoy the application :)
