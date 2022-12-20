import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//require("dotenv").config();
import { environments } from "./environments/environments";
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink } from "@apollo/client";
import { getValidAccessToken } from "./utils/getValidAccessToken";



// const client = new ApolloClient({
//   uri: environments.GRAPHQL_URI,
//   cache: new InMemoryCache(),
//   headers: {
//     Authorization: "Bearer " + accessToken,
//   },
// });

const client = new ApolloClient({
  link: new HttpLink({
    uri: environments.GRAPHQL_URI,
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
