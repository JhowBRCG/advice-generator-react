import "./index.css";
import divider from "../../assets/pattern-divider-desktop.svg";
import dice from "../../assets/icon-dice.svg";
import { useState, useEffect } from "react";
import { getRandomAdvice } from "../../services/random-advice";

export const AdviceGenerator = () => {
  const [advice, setAdvice] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const adviceData = async () => {
    const data = await getRandomAdvice();
    const { advice, id } = data;

    setAdvice(advice);
    setIdNumber(id);
  };

  useEffect(() => {
    adviceData();
  }, []);

  return (
    <main className="card-advice">
      <header className="card-advice__header">
        <h2>advice #{idNumber}</h2>
      </header>
      <div className="card-advice__content">
        <p>{advice}</p>
        <div className="card-advice__divisor-img">
          <img src={divider} />
        </div>
        <button onClick={adviceData}>
          <img src={dice} alt="Dice" />
        </button>
      </div>
    </main>
  );
};
