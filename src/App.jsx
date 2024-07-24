
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (filled <= 99) {
        setFilled((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [filled]);

  // console.log(filled);

  return (
    <>
      <div className="mt-10">
        <div>
          <h1 className="text-center mb-5 text-2xl font-medium ">
            Progress Bar
          </h1>
          <div
            className="h-[26px] w-1/2  relative mx-auto  rounded-xl flex  justify-center items-center  "
            style={{ border: filled < 100 ? "1px solid black" : "none"  }}
          >
            <p className = "relative z-40"
            style={{ color: filled < 50 ? "black" : "white"  }}
            >{filled}% </p>
            <div

              className="top-0 left-0 absolute bg-blue-500  rounded-xl h-full text-xl font-semibold "
              style={{ width: `${filled}%` }}
              // style={{
              //   transform: `scaleX(${filled *0.1})`,
              //   transformOrigin: "left"
              // }}
            >
              
            </div>
          </div>
          {filled < 99 ? ( 
            <p className="text-center mt-4 text-2xl font-semibold">Loading...</p>
          ) : (
            <p className="text-center mt-4 text-2xl font-semibold">Complete!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
