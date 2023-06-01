// import { wait } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./App.css";
function ClickingGame() {
  const [counter, setCounter] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [timer, setTimer] = useState(100);

  function addOne() {
    setCounter(counter + 1);
    setWallet(wallet + 1);
  }
  function incrementFun() {
    addOne();
    // if (counter === 0) {
    //   alert("Start");
    // } else if (counter < 20) {
    //   setCounter(counter + 1);
    //   setWallet(wallet + 1);
    // } else if (counter === 20) {
    //   alert("Woooow");
    //   const wallet = counter;
    //   // wallet = wallet - 10;
    //   setCounter(counter + 2);
    //   setWallet(wallet - 10);
    // } else if (counter > 20 && counter < 100) {
    //   setCounter(counter + 2);
    //   setWallet(wallet + 1);
    // } else if (counter === 1000) {
    //   alert("Game Over");
    //   setCounter(counter - counter);
    //   setWallet(wallet - wallet);
    // } else if (counter >= 100) {
    //   // const timer = counter;
    //   // setTimer(timer);
    //   setCounter(counter + 1);
    //   setWallet(wallet + 10);
    //   setInterval(() => {
    //     setCounter((counter) => counter + 1);
    //   }, 1000);
    // } else if (counter === 100) {
    // }
  }

  return (
    <div>
      <p>{timer}</p>
      <h1 className="header"> Welcome to clicking game</h1>
      <h1>{counter}</h1>
      <h1>{wallet}</h1>

      <button onClick={incrementFun}>click</button>
    </div>
  );
}
export default ClickingGame;
