import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
