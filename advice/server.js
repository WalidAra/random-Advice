const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const adviceList = [
  { id: 1, text: "Stay curious." },
  { id: 2, text: "Embrace failure as a learning opportunity." },
  { id: 3, text: "Take time to relax and recharge." },
  { id: 4, text: "Believe in yourself." },
  { id: 5, text: "Always be kind to others." },
  { id: 6, text: "Learn from your mistakes." },
];

app.get("/advice", (req, res) => {

  const randomIndex = Math.floor(Math.random() * adviceList.length);

  const randomAdvice = adviceList[randomIndex];

  res.json(randomAdvice);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
