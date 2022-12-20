import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//require("dotenv").config();
import { environments } from "./environments/environments";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { getValidAccessToken } from "./utils/getValidAccessToken";

const client = new ApolloClient({
  uri: environments.GRAPHQL_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjYzYTE3OTVhMWE3MGFkODUxYjE3Y2UzYSIsImJhYXNfZG9tYWluX2lkIjoiNjM5ZGE2NTI1NGFkMmY0ZjYxYjE0NTM4IiwiZXhwIjoxNjcxNTMxMTczLCJpYXQiOjE2NzE1MjkzNzMsImlzcyI6IjYzYTE3OTVhMWE3MGFkODUxYjE3Y2UzYyIsInN0aXRjaF9kZXZJZCI6IjYzYTE3OTVhMWE3MGFkODUxYjE3Y2UzYSIsInN0aXRjaF9kb21haW5JZCI6IjYzOWRhNjUyNTRhZDJmNGY2MWIxNDUzOCIsInN1YiI6IjYzOWVmZjc0OGQ4N2M5MjliNjU4MTkyOCIsInR5cCI6ImFjY2VzcyJ9.dHBhNF3_06P-l74yh7q6G2RSTjw-V6pNif4lnmwzhNI",
  },
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
