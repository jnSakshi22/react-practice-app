import { useState } from "react";

const MovingDot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      //   onPointerMove={(e) => {    //not a good practice and it's not working
      //     position.x = e.clientX;
      //     position.y = e.clientY;
      //   }}
      onPointerMove={(e) => {
        const nextPosition = {};
        nextPosition.x = e.clientX; // we can use these also
        nextPosition.y = e.clientY;
        setPosition(nextPosition);
        // setPosition({
        //   x: e.clientX,    we can use this also
        //   y: e.clientY,
        // });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
};

export default MovingDot;
