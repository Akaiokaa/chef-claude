import './MainSection.css'
import { useState } from 'react'

function MainSection() {
    const [ingredients, setIngredients] = useState([]);
    const mapped = ingredients.map((el) => <li key={el}>{el}</li>)

    // function addIngredient(newIngredient){
    //     setIngredients( prevIngredient => [...prevIngredient, newIngredient])
    // }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients( prev => [...prev, newIngredient]);
        
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder='e.g oregano'
                    aria-label='Add infredient'
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>

            <ul>
                {mapped}
            </ul>
        </main>
    )
}
export default MainSection