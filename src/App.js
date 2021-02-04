import React, { useState } from "react";
//import Recipe from "./Recipe";
import "./styles.css";

const InputBox = (props) => (
  <input
    placeHolder="add recipe name"
    onChange={(event) => props.setRecipe(event.target.value)}
  />
);

const Display = (props) => (
  <div>
    <li>{props.proc}</li>
  </div>
);

export function Box(props) {
  const [procs, setProcs] = useState("");
  const [proc, setProc] = useState([""]);
  return (
    <div class="container">
      <div class="row">
        <div class="flex-box">
          <div class="col-4 small">
            <img class="img1" src={props.recipe}></img>
            <input
              placeHolder="add ingredients"
              onChange={(event) => setProcs(event.target.value)}
            />
            <button
              onClick={() => {
                setProc([...proc, procs]);
              }}
            >
              AddIngredients
            </button>
            {proc.map((element) => (
              <li>{element}</li>
              //<Display proc={element}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([""]);
  const [procs, setProcs] = useState("");

  return (
    <div className="text-center bg-dark">
      <div className="container">
        <InputBox recipe={recipe} setRecipe={setRecipe} />

        <button
          onClick={() => {
            setRecipes([...recipes, recipe]);
          }}
        >
          Add Recipe
        </button>

        {recipes.map((element) => (
          <Box recipe={element} setProcs={setProcs} procs={procs} />
        ))}
      </div>
    </div>
  );
}
