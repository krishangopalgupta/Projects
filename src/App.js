import { useState } from "react";

export default function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <div
        onPointerMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
