import { ReactComponent as Nonveg } from "../images/foodtype/nonveg.svg";
import { ReactComponent as Veg } from "../images/foodtype/veg.svg";
import "../style/recipeCardStyle.css";
import { Link } from "react-router-dom";
const RecipeCards = () => {
  const allRecipes = [
    {
      id: 100,
      recipeName: "Mushroom Biryani",
      foodType: "Veg",
      ingredientsRequired: "Mushroom",
      stepsToPrepare: "cook",
      recipeImage: {
        url: "https://cookingfromheart.com/wp-content/uploads/2017/05/Chettinad-Mushroom-Biryani-4.jpg",
        altInfo: "Mushroom Biryani",
      },
      recipeDescription: "its a yummy Mushroom Biryani",
    },
    {
      id: 101,
      recipeName: "Mutton Biryani",
      foodType: "Non-veg",
      ingredientsRequired: "Mutton",
      stepsToPrepare: "cook",
      recipeImage: {
        url: "https://imagevars.gulfnews.com/2021/01/05/Mutton-Biryani-_176d2faa265_large.jpg",
        altInfo: "Mutton Biryani",
      },
      recipeDescription: "its a yummy mutton Biryani",
    },
    {
      id: 102,
      recipeName: "Chicken Biryani",
      foodType: "Non-veg",
      ingredientsRequired: "Mutton",
      stepsToPrepare: "cook",
      recipeImage: {
        url: "https://pipingpotcurry.com/wp-content/uploads/2021/04/Instant-Pot-Chicken-Biryani-recipe-Piping-Pot-Curry-480x270.jpg",
        altInfo: "Mutton Biryani",
      },
      recipeDescription: "its a yummy mutton Biryani",
    },
    {
      id: 103,
      recipeName: "Paneer Biryani",
      foodType: "Veg",
      ingredientsRequired: "Mutton",
      stepsToPrepare: "cook",
      recipeImage: {
        url: "https://spicecravings.com/wp-content/uploads/2020/08/Achari-Paneer-Biryani-New-2.jpg",
        altInfo: "Mutton Biryani",
      },
      recipeDescription: "its a yummy mutton Biryani",
    },
    {
      id: 104,
      recipeName: "Fish Curry",
      foodType: "Non-veg",
      ingredientsRequired: "Mutton",
      stepsToPrepare: "cook",
      recipeImage: {
        url: "https://imagevars.gulfnews.com/2021/01/05/Mutton-Biryani-_176d2faa265_large.jpg",
        altInfo: "Mutton Biryani",
      },
      recipeDescription: "its a yummy mutton Biryani",
    },
    {
      id: 105,
      recipeName: "Prawn Biryani",
      foodType: "Non-veg",
      ingredientsRequired: "Mutton",
      stepsToPrepare: "cook",
      recipeImage: {
        url: "https://theyummydelights.com/wp-content/uploads/2020/04/prawns-biryani-recipe.jpg",
        altInfo: "Mutton Biryani",
      },
      recipeDescription: "its a yummy mutton Biryani",
    },
  ];
  function handleDisplay(id) {
    console.log("delete id", id);
    allRecipes((values) => {
      const items = values.filter((i) => i.id === id);
      console.log("items", items);
      return items;
    });
  }

  return (
    <div className="ImageCards" id="ImageCards">
      <div className="RecipesBlock">
        <div className="RecipesBlockInnerContainer">
          <div className="TextContainer">
            <h2>Our recipes</h2>
            <p className="PopularRecipes">POPULAR RECIPES</p>
          </div>
        </div>
      </div>
      <div className="TextRight">
        <Link to="/recipe">
          <button className="PrimaryBtn" id="addrecipe" name="addrecipe">
            Add recipes
          </button>
        </Link>
      </div>
      <div className="RecipeCardWrap">
        {allRecipes.map(function (recipes) {
          return (
            <div
              className="RecipeCard"
              onClick={() => handleDisplay(recipes.id)}
            >
              <div className="CoverImg">
                <img
                  src={recipes.recipeImage.url}
                  alt={recipes.recipeName}
                  id="card"
                />
              </div>
              <div className="Content">
                <div className="NameContent">
                  <p>{recipes.recipeName}</p>
                  {recipes.foodType === "Veg" ? (
                    <Veg />
                  ) : recipes.foodType === "Non-veg" ? (
                    <Nonveg />
                  ) : (
                    <p>vegan</p>
                  )}
                </div>
                <p>{recipes.recipeDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RecipeCards;
