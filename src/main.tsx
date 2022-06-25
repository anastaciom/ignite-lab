import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { client } from "./lib/apollo";
import "./styles/global.css";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          pauseOnHover={true}
          toastStyle={{ fontSize: 12, fontWeight: "bold" }}
          progressStyle={{ background: "gray" }}
        />
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
