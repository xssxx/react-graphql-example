import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Display from "./Components/Display";

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <Display />
      </div>
    </ApolloProvider>
  );
};

export default App;
