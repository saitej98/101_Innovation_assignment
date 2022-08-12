import React from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css"
function Navbar() {
  let navigate = useNavigate();
  function handleClick() {
    return navigate("/");
  }
  return (
    <div className="main" onClick={handleClick}>
      <h1 className="title">TheFoodList</h1>
    </div>
  );
}

export default Navbar;
