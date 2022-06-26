import express from "express"
import { graphqlHTTP } from "express-graphql"
import { schema } from "./schema/schema.js"
import mongoose from "mongoose"

const app = express()

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(process.env.MONGO_CONNECTION)
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

app.listen(4000, () => {
    console.log(`Now, server is listening on port 4000`);
})