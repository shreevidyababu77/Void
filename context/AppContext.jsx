
"use client";

import { createContext, useContext, useState } from "react";

// Create the Context
const AppContext = createContext();

// Create the Provider
export function AppProvider({ children }) {
  // Shared application states
  const [points, setPoints] = useState(0);
  const [goals, setGoals] = useState([]);
  const [focusSessions, setFocusSessions] = useState([]);

  // Add a new goal
  const addGoal = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  // Complete a focus session and award points
  const completeFocusSession = (session) => {
    setFocusSessions((prevSessions) => [
      ...prevSessions,
      session,
    ]);

    setPoints((prevPoints) => prevPoints + (session.points || 10));
  };

  // Redeem points for a break
  const redeemPoints = (amount) => {
    if (amount <= 0 || amount > points) {
      return false;
    }

    setPoints((prevPoints) => prevPoints - amount);
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        points,
        goals,
        focusSessions,
        addGoal,
        completeFocusSession,
        redeemPoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to access Context
export function useAppContext() {
  return useContext(AppContext);
}
