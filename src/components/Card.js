import React from "react";


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Authors:</strong> {props.authors}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>More Information:</strong> {props.link}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card; 