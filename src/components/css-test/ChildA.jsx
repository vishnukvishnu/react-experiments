import React, { useEffect } from "react";
import stylesA from "./style-a.module.css";
import "./styleA.css";

function ChildA({ count, updateCount }) {
  useEffect(() => {
    console.log(count);
    count += 16
    console.log(count);
  }, []);

  return (
    <div>
      <h1 className="heading">Child A -- {count}</h1>
    </div>
  );
}

export default ChildA;
