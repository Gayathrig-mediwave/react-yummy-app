import { Link } from "react-router-dom";
import "../style/displayRecipeStyle.css";
const DisplayRecipe = () => {
  return (
    <div className="DispRecipeContainer">
      <div className="DispRecipeSubCont">
        <Link to="/">Back to home</Link>
        <div className="DispRecipeHead">
          <div className="RecipeName">
            <h2 id="dispname"> calm dip </h2>
          </div>
          <div className="FoodType">
            <img id="foodTypeIcon" src="./images/Group 3.png" alt="" />
          </div>
        </div>
        <div
          className="DisplayRecipeImg"
          id="dispRecipe-img"
          name="dispRecipe-img"
        />
      </div>

      <div className="DispRecipeHead">
        <h3> Ingredients required </h3>
      </div>

      <div className="DisplayIngredients">
        <p id="disp-ing" name="disp-ing">
          1 (8 ounce) block cream cheese, room temperature 1 large shallot,
          minced 1/4 cup chopped parsley 3 tablespoons chopped chives 1
          tablespoon lemon zest 1 tablespoon freshly squeezed lemon juice
        </p>
      </div>

      <div className="DispRecipeHead">
        <h3> Steps to prepare</h3>
      </div>

      <div className="DisplaySteps">
        <p id="disp-steps" name="disp-steps">
          Make the clam dip: In a medium bowl, beat the cream cheese with a
          handheld mixer on medium speed until smooth. A whisk will work fine if
          the cream cheese is very soft. Add the clams and clam juice: If any of
          the clams are too large for your liking, chop them smaller. It’s nice
          to have a mixture of sizes—it feels like you’ve won a prize when you
          get an occasional larger piece of clam.
        </p>
      </div>
    </div>
  );
};

export default DisplayRecipe;
