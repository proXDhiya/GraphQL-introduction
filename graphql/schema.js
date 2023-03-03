// graphql schema

const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String!
    }    

    type RootQuery {
        user: User!
    }

    schema {
        query: RootQuery
    }
`);
