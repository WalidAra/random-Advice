import  { useState } from "react";
import "./App.css";
import "./output.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("http://localhost:3001/advice");
      const data = await response.json();
      setAdvice(data.text);
      setAdviceId(data.id.toString());
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen center_all co">
        <div className="contain">
          <h1 className="header">Todays Advice</h1>

          <div id="todaysAdvice" className="todaysAdivce">
            {advice}
          </div>

          <div id="adviceId" className="advice_id">
            {adviceId}
          </div>

          <button
            id="pickAdviceBtn"
            className="pick_advice_btn"
            onClick={fetchAdvice}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
