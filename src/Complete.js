import React, { useState } from "react";
import data from "./data";
import "./complete.css";

const Complete = () => {
  const [input, setinput] = useState("");

  const onChange = (e) => {
    setinput(e.target.value);
  };

  const filteredOptions = data.filter((item) => {
    return item.VOCName.toLowerCase().indexOf(input.toLowerCase()) > -1;
  });

  return (
    <div>
      <div className="container-fluid inputbox">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Search for sample..."
          aria-label=".form-control-lg example"
          onChange={onChange}
          value={input}
        ></input>
      </div>
      <div className="tablediv">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">VOCName</th>
              <th scope="col">Concentration</th>
              <th scope="col">CancerType</th>
              <th scope="col">Gradient</th>
            </tr>
          </thead>
          <tbody>
            {filteredOptions.map((item) => (
              <tr>
                <td>{item.VOCName}</td>
                <td>{item.Concentration}</td>
                <td>{item.CancerType}</td>
                <td>{item.Gradient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complete;
