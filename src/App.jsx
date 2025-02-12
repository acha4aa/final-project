import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/homepage/HomePages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeContext from "./components/context/ThemeContext";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Detail from "./pages/DetailView";
import CategoriMovies from "./components/CategoriMovies";
import Rating from "./pages/ratings/Rating";
import Favorite from "./pages/favorites/Favorite";
import Kategori from "./pages/kategori/Kategori";

function App() {
  const theme = useState("light");

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePages />} />
              <Route path="/details/:id" element={<Detail />} />
              <Route path="/kategori/:id" element={<CategoriMovies />} />
              <Route path="/ratings" element={<Rating />} />
              <Route path="/kategori" element={<Kategori />} />
              <Route path="/favorites" element={<Favorite />} />
            </Routes>
          </Provider>
        </ThemeContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
