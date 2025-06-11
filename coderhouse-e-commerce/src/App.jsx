import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/LoginContext/LoginContext.jsx";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import NotFound from "./pages/NotFound/NotFound";
import NavBar from "./components/navbar/navbar.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PurchaseListContainer from "./components/PurchaseListContainer/PurchaseListContainer.jsx";
import PurchaseDetailContainer from "./components/PurchaseDetailContainer/PurchaseDetailContainer.jsx";
import PrivateRoute from "./utils/privateRoute.jsx";
import PublicRoute from "./utils/publicRoute.jsx";

function App() {
  const { currentUser } = useAuth();
  const pathname = window.location.pathname;

  const noFooterPaths = ["/", "/register"];
  const showFooter = !noFooterPaths.includes(pathname);

  return (
    <BrowserRouter>
      {currentUser && <NavBar />}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/colection/:category?"
          element={
            <PrivateRoute>
              <ItemListContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/item/:id"
          element={
            <PrivateRoute>
              <ItemDetailContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/purchase"
          element={
            <PrivateRoute>
              <PurchaseListContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/purchase/:id"
          element={
            <PrivateRoute>
              <PurchaseDetailContainer />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </BrowserRouter>
  );
}

export default App;
