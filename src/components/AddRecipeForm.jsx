import { Link } from "react-router-dom";
import "../style/addRecipeFormStyle.css";
export const AddRecipeForm = () => {
  return (
    <div className="AddRecipeContainer">
      {/* back to home */}
      <Link to="/">Back to home</Link>
      <form id="form-container" className="RecipieForm">
        <h2>Add your new recipes</h2>
        {/* recipe name */}
        <div className="RecipeLabelDiv">
          <label>Name of your recipe</label>
        </div>
        <div className="RecipeNameDiv">
          <input
            type="text"
            id="recipe-name"
            name="recipe-name"
            placeholder="Clam Dip"
          />
        </div>
        {/* recipe image */}
        <div className="RecipeImageDiv">
          <label>Recipe image</label>
        </div>
        <div className="RecipeImageInputDiv">
          <input
            type="text"
            id="recipe-image"
            name="recipe-image"
            placeholder="cover_image.jpeg"
          />
        </div>
        {/* upload button */}
        <div className="UploadbuttonDiv">
          <label id="uploadbutton">UPLOAD</label>
        </div>

        {/* veg or non veg radio group */}
        <div className="FoodType">
          <p>Food type </p>
          <input
            type="radio"
            id="vegetarian"
            name="food-type-radio"
            value="Vegetarian"
          />
          <label>Vegetarian</label>
          <br />
          <input
            type="radio"
            id="nonvegetarian"
            name="food-type-radio"
            value="Non-Vegetarian"
          />
          <label>Non-Vegetarian</label>
          <br />
        </div>
        {/* Ingredients required */}
        <div className="IngDiv">
          <p>Ingredients required</p>
        </div>
        <div className="IngredientsDiv">
          <textarea
            className="Ingredients"
            id="ingredients"
            name="ingredients"
            rows="4"
            cols="50"
            placeholder="1 (8 ounce) block cream cheese, 
              room temperature 1 large shallot, 
              minced 1/4 cup chopped parsley
              3 tablespoons chopped chives 
              1 tablespoon lemon zest 
              1 tablespoon freshly squeezed lemon juice"
          />
        </div>
        {/* Steps to prepare  */}
        <div className="StepsDiv">
          <p>Steps to prepare</p>
        </div>
        <div className="Preparation">
          <textarea
            className="PreparationSteps"
            id="preparation-steps"
            name="preparation-steps"
            rows="4"
            cols="50"
            placeholder="
           Make the clam dip:
           In a medium bowl, 
           beat the cream cheese with a handheld mixer
           on medium speed until smooth. 
           A whisk will work fine if 
           the cream cheese is very soft.
           Add the clams and clam juice:
           If any of the clams are too large for your liking, 
           chop them smaller. 
           It’s nice to have a mixture of sizes—it feels like 
           you’ve won a prize when you get 
           an occasional larger piece of clam."
          ></textarea>
        </div>
        {/*submit button*/}
        <div className="AddRecipeBtnClass">
          <Link to="/">
            <input
              type="submit"
              className="AddRecipeBtn"
              id="addrecipebtn"
              name="addrecipebtn"
              value="ADD RECIPE"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};
export default AddRecipeForm;
