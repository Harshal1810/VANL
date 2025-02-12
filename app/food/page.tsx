"use client";

import "./food.css";
import { useSelection } from "../context/SelectionContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FoodSelection = () => {
  const { selectedDate, selectedFood, setSelectedFood } = useSelection();
  const [selectedFoods, setSelectedFoods] = useState<string[]>(selectedFood || []);
  const router = useRouter();

  const foods = [
    { src: "/food/burgers.jpeg", alt: "Burgers, fries and fried chicken", label: "Burgers and fried chicken" },
    { src: "/food/dog.jpeg", alt: "Hotdog", label: "Hotdog" },
    { src: "/food/koreanfood.jpeg", alt: "Korean food", label: "Korean food" },
    { src: "/food/pasta.jpeg", alt: "Pasta", label: "Pasta" },
    { src: "/food/pizza.jpeg", alt: "Pizza", label: "Pizza" },
    { src: "/food/salad.jpeg", alt: "Salad", label: "Salad" },
    { src: "/food/steak.jpeg", alt: "Steak", label: "Steak" },
    { src: "/food/sushi.jpeg", alt: "Sushi", label: "Sushi" },
  ];

  const handleCheckboxChange = (foodLabel: string) => {
    setSelectedFoods((prev) =>
      prev.includes(foodLabel) ? prev.filter((f) => f !== foodLabel) : [...prev, foodLabel]
    );
  };

  const handleSubmit = async () => {
    setSelectedFood(selectedFoods);

    // Send data to backend
    await fetch("/api/saveSelection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: selectedDate, food: selectedFoods }),
    });

    router.push("/bye");
  };

  return (
    <div className="food-container">
      <h1 className="food-title">What food would you like to eat?</h1>

      <div className="food-selection">
        {foods.map((item, index) => (
          <div key={index} className="food-item">
            <Image src={item.src} alt={item.alt} width={150} height={150} className="food-img" />
            <label>
              <input
                type="checkbox"
                value={item.label}
                checked={selectedFoods.includes(item.label)}
                onChange={() => handleCheckboxChange(item.label)}
              />
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} className="button">Continue Hihii</button>
    </div>
  );
};

export default FoodSelection;
