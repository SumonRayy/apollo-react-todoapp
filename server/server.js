const PORT = process.env.PORT || 6969;  // set port
import express from 'express';
import { ApolloServer as apolloServer } from 'apollo-server-express';
import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


async function startServer() {  // start server
    const app = express();  // create express app
    app.use(cors());  // enable cors
    dotenv.config();  // load env variables

    const server = new apolloServer({ typeDefs, resolvers });   // create apollo server
    await server.start();     // start apollo server
    server.applyMiddleware({ app });    // apply middleware to express app

    app.use((req, res) => {
        res.send("Server Started Successfully!"); // send response
    });

    try {
        await mongoose.connect(process.env.MONGO_URI);  // connect to mongo
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }

    app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    );  // start express server
}

startServer(); // start server