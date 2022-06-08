import { useState } from "react";
import "./App.css";
import { Clock, ClockClassComponent } from "./Clock/Clock";
import Timer from "./timer/timer";
function App() {

const[active,setActive] = useState("first")

  return (
    <>
      <button onClick={()=> setActive("second")}>Timer</button>
      <button onClick={()=> setActive("first")}>Clock</button>
      {/*<Clock />*/}
      {active === "first" && <ClockClassComponent />}
      {active === "second" && <Timer />}
    </>
  );
}

export default App;
