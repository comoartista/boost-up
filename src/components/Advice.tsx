import { useState } from "react";
import { adviceSection } from "../lib/data";

export default function Advice() {
  const [showAdvice, setShowAdvice] = useState(false);
  const handleAdvice = (event) => {
    if (event.target.textContent === "Advice") {
        setShowAdvice(true);
      } else if (event.target.textContent === "Encourage") {
        console.log("Encourage");
      }
  };
  return (
    <section className="flex justify-center gap-2 flex-wrap">
      {adviceSection.map((advice) => (
        <li className="list-none flex" key={advice.title}>
          {!showAdvice ? (
            <button onClick={(event) => {
                {}
            }} className="btn">
              {advice.title}
            </button>
          ) : (
            <button onClick={handleAdvice} className="btn">
              {advice.description}
            </button>
          )}
        </li>
      ))}
    </section>
  );
}
