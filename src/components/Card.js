import React from "react";
// import Greet from "./Greet";

export default function Card(props) {
  return (
    <div className="card">
      {/* <p>{props.phone2}</p> */}
      <p>{props.user.name.first + " " + props.user.name.last}</p>
      <p>{props.user.phone == null ? "N/A" : props.user.phone}</p>
    </div>
  );
}
