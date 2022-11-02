import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import AboutFilm from "./components/AboutFilm";
import BuyTicket from "./components/BuyTicket";
import Layout from "./components/Layout";
import Page404 from "./components/Page404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />

        <Route path="/films/about/:id" element={<AboutFilm />} />
        <Route path="/films/:id" element={<BuyTicket />} />
      </Route>
    </Routes>
  );
};

export default App;
