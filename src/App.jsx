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
import Kategori from "./pages/kategori/KategoriView";
import CategoriMovies from "./components/CategoriMovies";

function App() {
  const [count, setCount] = useState(0);
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
              <Route path="/kategori" element={<Kategori />} />
              <Route path="/kategori/:id" element={<CategoriMovies />} />
            </Routes>
          </Provider>
        </ThemeContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
