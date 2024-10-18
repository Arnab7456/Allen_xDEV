import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Body from "./pages/Body";

const LayOut = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Home />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Body />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
