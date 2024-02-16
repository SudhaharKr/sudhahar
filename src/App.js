import React from "react";
import Router from "./Router/Router";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Navbar End */}
      {/* Router */}
      <Router />
      {/* Router End */}
      {/* Footer */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default App;
