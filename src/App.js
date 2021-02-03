import React, { useState } from "react";
import "./styles.css";
import Recipe from "./Recipe.js";

const InputBox = (props) => (
  <input
    placeHolder="Chosse color"
    style={{ backgroundColor: props.color ? props.color : "yellow" }}
    onChange={(event) => props.setColor(event.target.value)}
  />
);
const Box = (props) => (
  <div
    style={{
      backgroundColor: props.color ? props.color : "yellow",
      height: "20px",
      width: "200px",
      margin: "auto",
      marginRight: "50px"
    }}
  ></div>
);

export default function App() {
  const [like, setLike] = useState(20);
  const [dislike, setDislike] = useState(65);
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red"]);
  return (
    <div className="App">
      <h1>Hello Pramod</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike - 1)}>👎 {dislike}</button>
      <button onClick={() => setDislike(dislike - 1)}>
        dislikecount {dislike}
      </button>

      <InputBox color={color} setColor={setColor} />

      <button onClick={() => setColors(colors.concat(color))}>Add</button>
      <p>{colors.join()}</p>
      {colors.map((col) => (
        <Box color={col} />
      ))}

      <Recipe />
    </div>
  );
}
