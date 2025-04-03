import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <AppBar />
      <Menu />

      <Routes>
        <Route path="/" element={""} />
        <Route path="/about" element={""} />
        <Route path="/products" element={""} />
        <Route path="*" element={""} />
      </Routes>
    </>
  );
}

export default App;
