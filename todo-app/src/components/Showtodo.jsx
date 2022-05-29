import React, { useState } from "react";
import Completed from "./Completed";

const Showtodos = ({ tasks }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? " Hide Completed todo":"Show Completed todo"
     }</button>
      {show
        ? tasks.map((task) => {
            if (task.done == true) {
              return <Completed text={task.text} />;
            }
          })
        : ""}
    </div>
  );
};

export default Showtodos;
