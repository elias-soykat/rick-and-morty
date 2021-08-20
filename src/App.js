import React from "react";
import GqlProvider from "./graphql/Provider";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <GqlProvider>
      <Home />
    </GqlProvider>
  );
}
