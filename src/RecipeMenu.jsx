import OmlettePic from "./assets/image-omelette.jpeg"

function RecipeMenu(){




    return(
        <>
            <div className="page">
                <div className="card">
                    <img className="RecipeImage" src={OmlettePic} alt="Food Picture"/>
                    <div className="contents">
                        <h1>Simple Omlette Recipe</h1>
                        <p className="description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

                        <div className="prep-time">
                            <h3>Preparation Time</h3>
                        <ul>
                            <li><strong>Total</strong>: Approximately 10 minutes</li>
                            <li><strong>Preparation</strong>: 5 minutes</li>
                            <li><strong>Cooking</strong>: 5 minutes</li>
                        </ul>
                        </div>
                        
                    </div>
                    <div className="Ingredients">
                        <h3>Ingredients</h3>
                        <ul className="IngredientsList">
                            <li>2-3 large eggs</li>
                            <li>Salt, to taste</li>
                            <li>Pepper, to taste</li>
                            <li>1 tablespoon of butter or oil</li>
                            <li>Optional fillings: cheese, vegetables, cooked meats, herbs</li>
                        </ul>
                    </div>
                    <div className="Instructions">
                        <h3>Instructions</h3>
                        <ol className="InstructionsList">
                            <li><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a table spoon of water or milk for a fluffer texture.</li>
                            <li><strong>Heat the pan:</strong> Place a non stick frying pan over medium heat and add butter or oil.</li>
                            <li><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                            <li><strong>Add fillings (optional):</strong>  When the egg begins to settle at the edges but are still slightly running in the middle, sprinkle your chosen fillings over one half od the omelett.e</li>
                            <li><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one dge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                            <li><strong>Enjoy:</strong> Serve hot, with additonal salt and pepper if needed.</li>
                        </ol>
                    </div>
                        
                    <h2 className="nutrition-title">Nutrition</h2>
                    <p className="nutrition-description">The table below shows nutritional values per serving without the additional fillings.</p>
                    <table className="nutrition">
                        <tbody>
                            <tr><td className="TableDescription">Calories</td><td><strong>277kcal</strong></td></tr>
                            <tr><td className="TableDescription">Carbs</td><td><strong>0g</strong></td></tr>
                            <tr><td className="TableDescription">Protein</td><td><strong>20g</strong></td></tr>
                            <tr><td className="TableDescription">Fat</td><td><strong>22g</strong></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );




}

export default RecipeMenu