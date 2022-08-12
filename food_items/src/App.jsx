import { Route, Routes } from "react-router";
import "./App.css";
import FoodItems from "./Components/FoodItems/FoodItems";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FoodItems/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
