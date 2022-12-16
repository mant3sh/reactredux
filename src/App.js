import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import Productsdisplay from "./components/Productsdisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar fixed t-0 h-[70px] bg-slate-600 w-[100%] z-[3]">
          <Nav />
        </div>
        <div className="w-[100%] h-[70px]"></div>
        <div className="container p-4 mx-auto">
          <Routes>
            <Route exact path="/" element={<ProductListing />} />
            <Route
              path="/productDetails/:productId"
              element={<ProductDetails />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
