import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Home/Login";
import Register from "./Component/Pages/Home/Register";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login/' element={<Login/>}/>
      <Route path='Register/' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
