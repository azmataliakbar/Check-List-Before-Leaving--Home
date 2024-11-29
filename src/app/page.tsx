"use client"

import Image from "next/image";
import React, { useState } from "react";
import "./globals.css";
import styles from './page.module.css';



type ChecklistItem = {
  id: number;
  text: string;
  icon: string;
  required: boolean | null;
};

const checklistItems: ChecklistItem[] = [
  { id: 1, text: "1- Switch off all room lights", icon: "/bulb.png", required: null },
  { id: 2, text: "2- Switch off all room fans", icon: "/fan.png", required: null },
  { id: 3, text: "3- Switch off all power outlets", icon: "/power.png", required: null },
  { id: 4, text: "4- Ensure refrigerator stays on", icon: "/fridge.png", required: null },
  { id: 5, text: "5- Close all bathroom taps", icon: "/tap.png", required: null },
  { id: 6, text: "6- Close all gas valves", icon: "/gas.png", required: null },
  { id: 7, text: "7- Close all doors & windows", icon: "/window.png", required: null },
  { id: 8, text: "8- Prepare handbag with ID cards & phone", icon: "/bag.png", required: null },
  { id: 9, text: "9- Keep car/bike keys in bag", icon: "/keys.png", required: null },
  { id: 10, text: "10- Carry money / cards in wallet", icon: "/wallet.png", required: null },
  { id: 11, text: "11- Lock all doors", icon: "/lock.png", required: null },
];

export default function Home() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(checklistItems);
  const [message, setMessage] = useState("");

  const handleCheck = (id: number, value: boolean) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, required: value } : item
      )
    );
  };

  const validateChecklist = () => {
    if (checklist.some((item) => item.required === null)) {
      setMessage("Incomplete checklist!");
    } else {
      setMessage("Checklist is completed!");
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Checklist <br /> Before Leaving Home</h1>
        <ul className={styles.list}>
          {checklist.map((item, index) => (
            <li key={item.id} className={styles.item}>
            <Image
            src={item.icon} // Path to the image
            alt={item.text} // Alternative text for accessibility
            width={40}      // Desired width
            height={40}     // Desired height
            className={styles.icon} // Custom styles
            />

              {item.text}
              <div className={styles.checkboxes}>
                <label>
                  <input
                    type="radio"
                    name={`item-${index}`}
                    onChange={() => handleCheck(item.id, true)}
                  />
                  ✅
                </label>
                <label>
                  <input
                    type="radio"
                    name={`item-${index}`}
                    onChange={() => handleCheck(item.id, false)}
                  />
                  ❌
                </label>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={validateChecklist} className={styles.button}>
          Validate Checklist
        </button>
        {message && <p className={styles.message}>{message}</p>}
        <h3 className="text-center font-bold text-gray-300">Author: Azmat Ali</h3>
      </div>
      
    </main>
  );
}
