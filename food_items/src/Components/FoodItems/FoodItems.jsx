import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../FoodItems/FoodItems.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
function FoodItems() {
  let navigate = useNavigate();
  let [food, setFood] = useState([]);

  useEffect(() => {
    axios.get("https://nodejs-101innovation.herokuapp.com/").then((res) => {
      setFood(res.data);
    });
  }, []);

  function handleClick(e) {
    return navigate(`/${e.code}`);
  }
  return (
    <div className="container">
      <Navbar />
      <div className="split">
        <div className="foodlist">Food List</div>
        <div className="favorites">Favorites</div>
      </div>
      <div className="fooditems">
        {food.map((e) => (
          <div className="items">
            <img
              className="image"
              src="https://mathworld.wolfram.com/images/eps-svg/TetrahedronProj1_500.svg"
              alt=""
              onClick={() => {
                handleClick(e);
              }}
            />

            <div className="name">
              <h3
                className="gen"
                key={e.code}
                onClick={() => {
                  handleClick(e);
                }}
              >
                {" "}
                {e.product_name}({e.generic_name})
              </h3>
            </div>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default FoodItems;
