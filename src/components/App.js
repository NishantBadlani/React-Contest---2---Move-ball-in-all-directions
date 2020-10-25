import React, {Component, useState, useEffect} from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  useEffect(() => {
    function changePosition(event) {
      // console.log("Executed");
      let currentLeft = +ballPosition.left.substr(0, ballPosition.left.length - 2);
      let currentTop = +ballPosition.top.substr(0, ballPosition.top.length - 2);

      if (event.keyCode === 37) {
        currentLeft -= 5;
      } else if (event.keyCode === 38) {
        currentTop -= 5;
      } else if (event.keyCode === 39) {
        currentLeft += 5;
      } else if (event.keyCode === 40) {
        currentTop += 5;
      }
      setBallPosition({
        left: `${currentLeft}px`,
        top: `${currentTop}px`
      });
      // console.log(currentLeft, currentTop);
    }

    document.addEventListener("keydown", changePosition);

    return () => {
      document.removeEventListener("keydown", changePosition);
    };
  }, [ballPosition]);

  const reset = () => {
    setRenderBall(false);
    // setX(0);
    // setY(0);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };

  const buttonClickHandler = () => {
    setRenderBall(!renderBall);
  };

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={buttonClickHandler}>
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
