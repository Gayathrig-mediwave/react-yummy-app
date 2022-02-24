import { CoverImage } from "../components/CoverImage";
import { AddRecipeForm } from "../components/AddRecipeForm";

export const Recipe = () => {
  return (
    <>
      <div className="RecipePage">
        {" "}
        <CoverImage show_NewRecipe />
      </div>
      <AddRecipeForm />
    </>
  );
};
