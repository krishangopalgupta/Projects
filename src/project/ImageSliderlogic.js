import { sculptureList } from "./recipes";
import { useState } from "react";
export default function App() {
  const [index, setIndex] = useState(0);
  const [showmore, setShowmore] = useState(false);

  function prev() {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(index + 11);
    }
  }

  let oldValue = index <= 0;
  let nextValue = index >= 11;

  function next() {
    setIndex(index + 1);
    if (index >= 11) {
      setIndex(index - 11);
    }
  }

  function Showmore() {
    setShowmore(!showmore);
  }

  let scr = sculptureList[index];
  return (
    <>
      <button onClick={prev} style={{ cursor: "pointer" }} disabled={oldValue}>
        previous
      </button>
      <button onClick={next} style={{ cursor: "pointer" }} disabled={nextValue}>
        Next
      </button>
      <p>({index + 1} of 12)</p>
      <h2>
        {scr.name} by {scr.artist}
      </h2>

      <div>
        <img
          src={sculptureList[index].url}
          alt={scr.name}
          style={{ width: "20%", height: "10%" }}
        />
      </div>
      <button onClick={Showmore} style={{ cursor: "pointer" }}>
        <p>{showmore ? "hide" : "show"} details</p>
      </button>
      <p>{showmore ? scr.description : ""}</p>
    </>
  );
}
