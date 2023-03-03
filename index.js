const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./graphql/schema');
const root = require('./graphql/resolver');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
