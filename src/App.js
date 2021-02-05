import React, { useState } from "react";
//import Recipe from "./Recipe";
import "./styles.css";

const InputBox = (props) => (
  <input
    placeHolder="add recipe image link"
    onChange={(event) => props.setRecipe(event.target.value)}
  />
);

const Display = (props) => (
  <>
    <ul class="list-group"></ul>
    <li class="list-group-item list-group-item-primary">{props.proc}</li>
  </>
);

export function Box(props) {
  const [procs, setProcs] = useState("");
  const [proc, setProc] = useState(["dosa batter", "oil"]);
  const [ing, setIng] = useState(true);
  return (
    <div class="container">
      <div>
        <img class="img1" src={props.recipe} alt="food recipe"></img>
        <br />
        <br />
        <input
          placeHolder="add ingredients"
          onChange={(event) => setProcs(event.target.value)}
        />{" "}
        <br />
        <br />
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            setProc([...proc, procs]);
          }}
        >
          AddIngredients
        </button>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => {
            setIng(!ing);
          }}
        >
          Toggle Ingredients
        </button>
      </div>
      {proc.length > 0
        ? ing
          ? proc.map((element) => <Display proc={element} />)
          : ""
        : ""}
    </div>
  );
}
export default function App() {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([
    "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
    "https://www.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV__-3abmbiyCo3JjXlzLESUd_jmvbgQ62Rw&usqp=CAU"
  ]);
  const [procs, setProcs] = useState("");
  const [toogle, setToggle] = useState(true);

  return (
    <div>
      <h1 class="start"> Delicious Dosa Recipes</h1>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <InputBox recipe={recipe} setRecipe={setRecipe} />
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            setRecipes([...recipes, recipe]);
          }}
        >
          Add Dosa Recipe
        </button>

        <button
          type="button"
          class="btn btn-dark"
          onClick={() => {
            setToggle(!toogle);
          }}
        >
          Toggle Recipe
        </button>
      </div>
      <div class="container">
        {toogle ? (
          recipes.map((element) => (
            <Box recipe={element} setProcs={setProcs} procs={procs} />
          ))
        ) : (
          <h1 class="end">No Dosa Recipes found</h1>
        )}
      </div>
    </div>
  );
}
