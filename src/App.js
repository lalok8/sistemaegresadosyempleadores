import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
import "./style/index.css";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Aside/>
      <main className="app-main">
        <AppRouter/>
      </main>
    </div>
  );
};

export default App;
