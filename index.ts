import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { connect } from 'mongoose';
import Product from '../models/products.js';

const MONGODB = "mongodb+srv://atuhinbd:nfPNlU4UVhmw2nqJ@cluster0.vfeao8o.mongodb.net/?retryWrites=true&w=majority";;

const typeDefs = `#graphql

type User {
  id:ID!
  name:String!
  status:Active
  }


  type Product {
  id: ID!
  name: String!
  price: Float!
  description: String!
  image: String!
  User: [User]
  }


  type Order {
  id: ID!
  products: [Product!]!
  status: String!
  totalPrice: Float!
  createdAt: String!
  User: [User]
  updatedAt: String!
  }

  type Query {
  products(page: Int, pageSize: Int): [Product!]!
  order(id: ID!): Order!
  }

  type Mutation {
  createOrder(products: [ID!]!): Order!
  updateOrderStatus(id: ID!, status: String!): Order!
  }
`;

const resolvers = {
    Query: {
       
    },
    Mutation: {
        
}
}
await connect(MONGODB);

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const port = Number.parseInt(process.env.PORT) || 4000;

const { url } = await startStandaloneServer(server, {
    listen: { port: port }
});

console.log(`Server is ready at ${url}`);