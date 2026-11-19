import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Service from "./pages/service";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import ServiceDetail from "./pages/servicedetail";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/" element={<Service />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
