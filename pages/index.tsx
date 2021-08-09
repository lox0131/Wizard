import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { MealI } from "../interfaces/Meal";
import { getAllMeals } from "../services/apiMeals";
import { DrinkI } from "../interfaces/Drink";
import { getAllDrinks } from "../services/apiDrinks";
import { Dashboard } from "../components/Dashboard";

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [allMeals, setAllMeals] = useState<MealI[] | undefined>([]);
  const [allDrinks, setAllDrinks] = useState<DrinkI[] | undefined>([]);
  const [toggle, setToggle] = useState<string>('Drinks');

  useEffect(() => {
    getAllMeals().then((res) => setAllMeals(res.meals));
    getAllDrinks().then((res) => setAllDrinks(res.drinks));
  }, []);

  return (
    <>
      <Header
        toggle={toggle}
        setToggle={setToggle}
      />
      <div>
        {allMeals &&
        // toggle between components
        toggle === "Drinks" ? (
          <>
          {console.log(user)}
          <Dashboard list={allDrinks} type={toggle} />
          </>
        ) : (
          <Dashboard list={allMeals} type={toggle} />
        )}
      </div>
    </>
  );
}
