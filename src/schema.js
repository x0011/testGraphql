import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String!
        getAllQuotes: [Quote]
        getAllOwners: [Owner]
        getOwnerByID(owner_id: ID!): Owner
        getOwnerWithQuotes(owner_id: ID!): OwnerWithQuotes
    }

    type Quote {
        id: ID!
        quote: String!
    }

    type Owner {
        id: ID!
        name: String!
    }

    type OwnerWithQuotes {
        owner: Owner
        quotes: [Quote]
    }

`);

export default schema;