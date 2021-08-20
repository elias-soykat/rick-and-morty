import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

const link = from([
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const GqlProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default GqlProvider;
