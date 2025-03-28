import RecipeCard from "./RecipeCard";

function Recipes() {
    const recipeList = [
        { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish with creamy sauce, eggs, cheese, and bacon.", link: "/recipe/1" },
        { id: 2, title: "Avocado Toast", description: "A simple and delicious toast topped with fresh avocado, olive oil, and seasonings.", link: "/recipe/2" }
    ];
    console.log(recipeList);
    return (
        <div className="recipes">
            <h1 className="recipes__title">Recipe Showcase</h1>
            <div className="recipes__grid">
                {recipeList.map((recipe) => (
                    <RecipeCard key={recipe.id} title={recipe.title} description={recipe.description} link={recipe.link} />
                ))}
            </div>
        </div>
    );
}

export default Recipes;