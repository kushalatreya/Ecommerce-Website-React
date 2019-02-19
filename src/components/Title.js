import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name}
          <span> <strong className="text-blue">{title}</strong></span>
        </h1>
      </div>
    </div>
  );
}
