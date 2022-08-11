import { graphqlHTTP } from "express-graphql";
import express from "express";
const port = 4000;
const app = express();

import schema from './src/schema.js';

import db from './src/db.js';

const database = new db();

const rootResolvers = {
    getAllQuotes: () => database.getAllQuotes(),
    getOwnerWithQuotes: ({owner_id}) => database.getOwnerWithQuotes(owner_id),
    getAllOwners: () => database.getAllOwners(),
    getOwnerByID: ({owner_id}) => database.getOwnerByID(owner_id),
    hello: () => "Hello",
}

app.use('/', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: rootResolvers,
}));

app.listen(port);