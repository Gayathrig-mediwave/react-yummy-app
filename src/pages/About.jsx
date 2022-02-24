import { CoverImage } from "../components/CoverImage";
import DisplayRecipe from "../components/DisplayRecipe";
export const About = () => {
  return (
    <>
      <div className="RecipeImage">
        <CoverImage show_RecipeName RecipeName="Calm Dip" />
      </div>
      <DisplayRecipe />
    </>
  );
};
