import React, { useState } from "react";
import "./styles.css";

let InGredients = () => (
  <div>
    <ul>
      <li>Cornflour</li>
      <li>Oil</li>
      <li>Potato</li>
    </ul>
  </div>
);

export default function App() {
  const [like, setLike] = useState(20);
  const [dislike, setDislike] = useState(65);

  return (
    <div className="App">
      <h1>Samosa Recipe</h1>

      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike - 1)}>👎 {dislike}</button>
      <button onClick={() => setDislike(dislike - 1)}>
        dislikecount {dislike}
      </button>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcvbr-MHz7WaDXx41azS3wcOPcq9xzp_hiw&usqp=CAU"
        alt="samosa"
      ></img>
      <br />
      <button>Ingredients</button>
      <p>{{ InGredients }}</p>
      <button>Preparation</button>
    </div>
  );
}
