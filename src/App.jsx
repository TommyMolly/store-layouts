import React, { useState } from "react";
import IconSwitch from "./components/IconSwitch";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [view, setView] = useState("cards");

  const toggleView = () => setView(view === "cards" ? "list" : "cards");
  const icon = view === "cards" ? "view_list" : "view_module";

  return (
    <div className="app">
      <IconSwitch icon={icon} onSwitch={toggleView} />
      {view === "cards" ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  );
}

export default App;
