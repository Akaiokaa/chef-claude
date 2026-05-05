import './MainSection.css'
import { useState } from 'react'
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
function MainSection() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);

    // function addIngredient(newIngredient){
    //     setIngredients( prevIngredient => [...prevIngredient, newIngredient])
    // }
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

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
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown}/>}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}
export default MainSection