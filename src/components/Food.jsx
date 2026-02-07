import { useState, useEffect } from "react";

function Food() {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((response) => response.json())
      .then((data) => {
        if(data.meals){
        setMeals(data.meals.slice(0, 8)); // show first 5
        }else{
          setError("No meals found")
        }
      })
      .catch(() => {
        setError("Error fetching food data. Please check the API link.");
      });
  }, []);

  return (
    <div>
      <h2>Food Categories</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="card">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="card-item">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p><strong>ID:</strong> {meal.idMeal}</p>
            <p>{meal.strMeal}</p>
            <p>{meal.strInstructions.slice(0,120)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;

