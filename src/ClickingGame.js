// import { wait } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import coffee from "./assets/image/coffee.png";
import "./App.css";
function ClickingGame() {
  const [counter, setCounter] = useState(0);
  const [wallet, setWallet] = useState(0);
  // const [timer, setTimer] = useState(100);

  const clicker = (counter) => {
    counter = wallet;
    setCounter(counter + 1);
    setWallet(wallet + 1);
  };
  const upgrade = () => {
    if (counter >= 10) {
      setWallet(wallet - 10);
    }
  };
  function incrementFun() {
    clicker();

    // if (counter === 0) {
    //   alert("Start");
    // } else
    if (counter >= 10) {
      setWallet(wallet + 4);
      setCounter(counter + 6);
    }
    //     setCounter(counter + 1);
    //     setWallet(wallet + 1);
    //   } else if (counter < 20) {
    //     setCounter(counter + 1);
    //     setWallet(wallet + 1);
    //   } else if (counter === 20) {
    //     alert("Woooow");
    //     const wallet = counter;

    //     setCounter(counter + 2);
    //     setWallet(wallet - 10);
    // else if (counter > 20 && counter < 100) {
    //   setCounter(counter + 2);
    //   setWallet(wallet + 1);
    // }
    //   } else if (counter === 1000) {
    //     alert("Game Over");
    //     setCounter(counter - counter);
    //     setWallet(wallet - wallet);
    //   } else if (counter >= 100) {
    //     setCounter(counter + 1);
    //     setWallet(wallet + 10);
    //     // useEffect(() => {
    //     //   setCounter(counter + 1);
    //     // }, 1000);
    //   } else if (counter === 100) {
    //   }
  }

  return (
    <div>
      {/* <p>{timer}</p> */}
      <h1 className="header"> Welcome to clicking game</h1>
      <h1>{counter}</h1>
      <h1>{wallet}</h1>

      <img src={coffee} onClick={incrementFun} height="100px" />
      <div>
        {wallet >= 10 ? (
          <button onClick={upgrade}>upgrade </button>
        ) : (
          <button onClick={upgrade} disabled>
            upgrade{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default ClickingGame;
