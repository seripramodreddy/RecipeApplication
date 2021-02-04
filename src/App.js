import React, { useState } from "react";
//import Recipe from "./Recipe";
import "./styles.css";

const InputBox = (props) => (
  <input
    placeHolder="add recipe name"
    onChange={(event) => props.setRecipe(event.target.value)}
  />
);

const Box = (props) => (
  <div class="container">
    <img src={props.recipe}></img>
    <li>{props.recipes}</li>
    <button>AddIngredients</button>
  </div>
);
export default function App() {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([""]);

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
          <Box recipe={element} />
        ))}
      </div>
    </div>
  );
}
