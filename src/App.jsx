import React from "react";
// importing components
import { Navbar, Footer } from "./components";
// importing Triplist container
import { TripList } from "./containers";
//importing css
import "./app.css";
const App = () => {
  return (
    <div className="travel-journal">
      <Navbar />
      <TripList />
      <Footer />
    </div>
  );
};

export default App;
