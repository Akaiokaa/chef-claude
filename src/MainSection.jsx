import './MainSection.css'
import { useState } from 'react'

function MainSection() {
    const [ingredients, setIngredients] = useState([]);
    const mapped = ingredients.map((el) => <li key={el}>{el}</li>)

    // function addIngredient(newIngredient){
    //     setIngredients( prevIngredient => [...prevIngredient, newIngredient])
    // }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if(newIngredient.length != 0){
            setIngredients( prev => [...prev, newIngredient]);
        }
        
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder='e.g oregano'
                    aria-label='Add infredient'
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>

            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{mapped}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
}
export default MainSection