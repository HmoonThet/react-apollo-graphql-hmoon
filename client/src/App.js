import "./App.css";
import "antd/dist/reset.css";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";

// *** Apollo Server API
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// *** Router
const routes = [{ path: "*", Component: Root }];
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  );
};

export default App;
