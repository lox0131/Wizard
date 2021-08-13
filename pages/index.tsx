import Header from "../components/Header";
import { useEffect, useState } from "react";
import { MealI } from "../interfaces/Meal";
import { getAllMeals, getRandomMeals } from "../services/apiMeals";
import { DrinkI } from "../interfaces/Drink";
import { getAllDrinks, getRandomDrinks } from "../services/apiDrinks";
import { Dashboard } from "../components/Dashboard";

export default function Home() {
  const [allMeals, setAllMeals] = useState<MealI[] | undefined>([]);
  const [allDrinks, setAllDrinks] = useState<DrinkI[] | undefined>([]);
  const [randomDrinks, setRandomDrinks] = useState<DrinkI[] | undefined>([]);
  const [randomMeals, setRandomMeals] = useState<MealI[] | undefined>([]);
  const [toggle, setToggle] = useState<string>("Drinks");
  const [filteredMeals, setFilteredMeals] = useState<MealI[] | undefined>(allMeals);
  const [filteredDrinks, setFilteredDrinks] = useState<DrinkI[] | undefined>(allDrinks)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    getAllMeals().then((res) => setAllMeals(res.meals));
    getAllDrinks().then((res) => setAllDrinks(res.drinks));
    getRandomDrinks().then((res) => setRandomDrinks(res.drinks))
    getRandomMeals().then((res) => setRandomMeals(res.meals))
  }, []);

  const filterElements = () => {
    if (toggle === "Drinks") {
      setFilteredDrinks(allDrinks?.filter((drink) => drink.strDrink.includes(search)));
    } else {
      setFilteredMeals(allMeals?.filter((meal) => meal.strMeal.includes(search)))
    }
  }

  return (
    <>
      <Header
        toggle={toggle}
        setToggle={setToggle}
        setSearch={setSearch}
        search={search}
        filterElements={filterElements}
      />
      <div>
        {randomDrinks && search === "" ? (
          // toggle between components
          toggle === "Drinks" ? (
            <Dashboard list={randomDrinks} type={toggle} />
          ) : (
            <Dashboard list={randomMeals} type={toggle} />
          )
        ) : toggle === "Drinks" ? (
          <Dashboard list={filteredDrinks} type={toggle} />
        ) : (
          <Dashboard list={filteredMeals} type={toggle} />
        )}
      </div>
    </>
  );
}
