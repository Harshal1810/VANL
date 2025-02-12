"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SelectionContextType {
  selectedDate: string;
  selectedFood: string[];
  setSelectedDate: (date: string) => void;
  setSelectedFood: (food: string[]) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFood, setSelectedFood] = useState<string[]>([]);

  return (
    <SelectionContext.Provider value={{ selectedDate, selectedFood, setSelectedDate, setSelectedFood }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};
