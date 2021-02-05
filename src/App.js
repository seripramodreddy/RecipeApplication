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
  <div class="card">
    <ul class="list-group list-group-flush"></ul>
    <li class="list-group-item">{props.proc}</li>
  </div>
);

export function Box(props) {
  const [procs, setProcs] = useState("");
  const [proc, setProc] = useState([]);
  const [ing, setIng] = useState(true);
  return (
    <div class="row row-cols-3">
      <div clas="col-sm-6">
        <div class="card-group">
          <div class="card bg-primary mb-3">
            <img class="img1 card-img-top" src={props.recipe}></img>
            <div class="card-body">
              <input
                class="card-link"
                placeHolder="add ingredients"
                onChange={(event) => setProcs(event.target.value)}
              />
              <button
                class="card-link"
                onClick={() => {
                  setProc([...proc, procs]);
                }}
              >
                AddIngredients
              </button>
              <button
                onClick={() => {
                  setIng(!ing);
                }}
              >
                Toggle Ingredients
              </button>
            </div>
          </div>
          {proc.length > 0
            ? ing
              ? proc.map((element) => <Display proc={element} />)
              : ""
            : ""}
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([
    "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800"
  ]);
  const [procs, setProcs] = useState("");
  const [toogle, setToggle] = useState(true);

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
        <button
          onClick={() => {
            setToggle(!toogle);
          }}
        >
          Toggle Recipe
        </button>
        {toogle
          ? recipes.map((element) => (
              <Box recipe={element} setProcs={setProcs} procs={procs} />
            ))
          : ""}
      </div>
    </div>
  );
}
