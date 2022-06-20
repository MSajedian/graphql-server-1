import express from "express"
import { graphqlHTTP } from "express-graphql"

const app = express()

app.use(
    '/graphql',
    graphqlHTTP({
        // schema: MyGraphQLSchema,
        // graphiql: true,
    }),
);

app.listen(4000, () => {
    console.log(`Now, server is listening on port 4000`);
})