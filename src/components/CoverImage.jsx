import "../style/CoverImageStyle.css";
import "../style/Style.css";
import SearchIconSource from "../images/home/searchIcon.png";

export const CoverImage = (props) => {
  return (
    <>
      <div className="Header">
        <div className="HeaderContent">
          <h1>{props.heading}</h1>

          {props.show_search && (
            <form id="formId" size="40">
              <input type="text" placeholder="Search" />
              <div className="Search">
                <img src={SearchIconSource} alt="Search-Icon" />
              </div>
            </form>
          )}
          {props.show_NewRecipe && (
            <h1 className="NewRecipe" id="NewRecipe">
              New Recipe
            </h1>
          )}
          {props.show_RecipeName && (
            <h1 className="RecipeName" id="RecipeName">
              {props.RecipeName}
            </h1>
          )}
        </div>
      </div>
    </>
  );
};
