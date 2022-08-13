import { Route, Routes } from "react-router";
import "./App.css";
import FoodItems from "./Components/FoodItems/FoodItems";
import SingleFoodItem from "./Components/SingleFoodItem/SingleFoodItem";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FoodItems />}></Route>
        <Route path="/:code" element={<SingleFoodItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
