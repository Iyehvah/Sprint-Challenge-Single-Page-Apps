import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Header} />
      
    </main>
  );
}
