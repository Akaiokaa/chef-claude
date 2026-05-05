function IngredientsList(props){
    const mapped = props.ingredients.map((el) => <li key={el}>{el}</li>)

    return (
         <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{mapped}</ul>
            {props.ingredients.length >= 4 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.toggleRecipeShown}>Get a recipe</button>
            </div>}
        </section>
    )
}

export default IngredientsList