import { CoverImage } from "../components/CoverImage";
import RecipeCards from "../components/RecipeCards";
import "../style/CoverImageStyle.css";

export const Home = () => {
  return (
    <>
      <div className="HomePage">
        <CoverImage show_search heading="Delicious recipes just click away" />
      </div>
      <RecipeCards />
    </>
  );
};
