import React from "react";
import "../SingleFoodItem/SingleFoodItem.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
function SingleFoodItem() {
  let [fooditem, setFooditem] = useState({});
  let { id } = useParams();

  // useEffect(() => {
  //   axios.get("http://localhost:8080/Items").then((res) => {
  //     let item = res.data.filter((e) => e.code == code);
  //     setFooditem(...item);
  //   });
  // }, []);

  useEffect(() => {
    axios
      .get(`https://nodejs-101innovation.herokuapp.com/?id=${id}`)
      .then((res) => setFooditem(res.data[0]));
  }, [id]);
  return (
    <div className="parent">
      <Navbar />
      <div className="child">
        <img
          src="https://mathworld.wolfram.com/images/eps-svg/TetrahedronProj1_500.svg"
          alt=""
          className="image"
        />
        <p className="food">{fooditem.product_name}</p>
      </div>
      <div classname="child1">
        <table border={{}}>
          <tbody>
            {Object.keys(fooditem).map((key, index) => {
              return (
                <tr key={index}>
                  <td style={{ fontWeight: "bold" }}>{key}</td>
                  <td>{fooditem[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SingleFoodItem;
