import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [like, setLike] = useState(20);
  const [dislike, setDislike] = useState(65);

  return (
    <div className="App">
      <h1>Hello Pramod</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike - 1)}>👎 {dislike}</button>
      <button onClick={() => setDislike(dislike - 1)}>
        dislikecount {dislike}
      </button>
    </div>
  );
}
