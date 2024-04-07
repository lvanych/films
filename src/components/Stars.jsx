import React from "react";
import Star from "./Star";

const Stars = ({ count }) => {
  if (count > 0 && count <= 5) {
    return (
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map((star, index) => {
          return (
            <li key={index}>
              <Star />
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Stars;
