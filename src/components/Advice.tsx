import { useState } from "react";
import { adviceSection } from "../lib/data";
import { generatePastelColor } from "../lib/utils";

export default function Advice() {
  const [showAdvice, setShowAdvice] = useState(false);

  const handleAdvice = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.textContent === "Advice") {
      setShowAdvice(true);
    } else if (event.currentTarget.textContent === "Encourage") {
      console.log("Encourage");
    }
  };

  console.log(showAdvice);
  return (
    <section className="flex justify-center gap-2 flex-wrap">
      {adviceSection.map((advice) => (
        <li className="list-none flex" key={advice.title}>
          {!showAdvice ? (
            <button
              className="btn"
              style={{ backgroundColor: generatePastelColor() }}>
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
