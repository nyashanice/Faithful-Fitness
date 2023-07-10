import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import Disclaimer from "./pages/Dislclaimer";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  // uri: "http://localhost:3001/graphql",
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter basename="/Faithful-Fitness">
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workout" element={<Workout />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
