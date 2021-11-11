import React, { useState, useMemo } from "react";
import "./App.css";

//asset imports
// import meetbit_logo from "../assets/meetbit_logo.png";

function App() {
  const [word, setWord] = useState("");

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   return (
  //     word ===
  //     word.split("").reverse().join("").toLowerCase().replace("/[^ws]/gi, ''")
  //   );
  // };

  let dummyWord = word.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '')

  const isPalindrome = useMemo(() => {
    return (
      word ===
      word.split("").reverse().join("").toLowerCase().replace()
    );
  }, [word]);

  return (
    <div className="main">
      <div className="card__outline">
        <div>
          {/* logo goes here */}

          <h1>Palindrome Challenge</h1>
        </div>
        <div>
          <input
            type="text"
            id="palindrome"
            placeholder="Palindrome"
            onChange={(event) => setWord(event.target.value)}
          />
          <p>
            {isPalindrome ? "You got a palindrome" : "This isn't a palindrome"}
          </p>
        </div>
        <button>Check this string</button>
      </div>
    </div>
  );
}

export default App;
