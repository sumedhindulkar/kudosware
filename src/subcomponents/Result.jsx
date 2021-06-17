import React from "react";

export default function Results(props) {
  return (
    <div className="col-3 mb-4">
      <div className="item p-4">
        <img src={props.img} className="img-fluid my-3" alt="icon" />
        <h6 className="mx-4 my-2 p-name">{props.name}</h6>
        <h6 className="mx-4 my-2 p-id">Mission ids:</h6>
        <h6 className="mx-4 my-2 p-year">Launch Year:{props.year}</h6>
        <h6 className="mx-4 my-2 p-launch">
          Successful Launch:
          {props.launch == false ? " False" : " True"}
        </h6>
        <h6 className="mx-4 my-2 p-id">
          Sucessful Landing:
          {props.land === null ? " False" : " True"}
        </h6>
      </div>
    </div>
  );
}
