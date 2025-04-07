import { Route, Routes } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import TopMenu from "./components/TopMenu/TopMenu";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <>
      <TopMenu />
      <NavigationMenu />

      <Routes>
        <Route path="/" element={<OrdersPage />} />
        <Route path="/orders" element={<ProductsPage />} />
        <Route path="/products" element={""} />
        <Route path="*" element={""} />
      </Routes>
    </>
  );
}

export default App;
