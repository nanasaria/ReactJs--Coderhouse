import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colection/:category?" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
