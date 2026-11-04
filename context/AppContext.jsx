
"use client";

import { createContext, useContext, useState } from "react";

import {
  dummyGoals,
  dummyFocusSessions,
  dummyRedemptions,
} from "../data/dummyData";

// Create the Context
const AppContext = createContext();

// Calculate the initial points from sample activity
const initialPoints =
  dummyFocusSessions.reduce((total, session) => total + session.points, 0) -
  dummyRedemptions.reduce((total, redemption) => total + redemption.cost, 0);

// Create the Provider
export function AppProvider({ children }) {
  // Shared application states initialized with dummy data
  const [points, setPoints] = useState(initialPoints);
  const [goals, setGoals] = useState(dummyGoals);
  const [focusSessions, setFocusSessions] = useState(dummyFocusSessions);
  const [redeemedBreaks, setRedeemedBreaks] = useState(dummyRedemptions);

  // Add a new goal
  const addGoal = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  // Complete a focus session and award points
  const completeFocusSession = (session) => {
    const earnedPoints = session.points || 10;

    setFocusSessions((prevSessions) => [
      ...prevSessions,
      {
        ...session,
        points: earnedPoints,
      },
    ]);

    setPoints((prevPoints) => prevPoints + earnedPoints);
  };

  // Redeem points for a break
  const redeemPoints = (amount, breakDetails = {}) => {
    if (amount <= 0 || amount > points) {
      return false;
    }

    setPoints((prevPoints) => prevPoints - amount);

    setRedeemedBreaks((prevBreaks) => [
      ...prevBreaks,
      {
        id: Date.now(),
        title: breakDetails.title || "Break",
        duration: breakDetails.duration || "Custom break",
        cost: amount,
        redeemedAt: new Date().toISOString(),
      },
    ]);

    return true;
  };

  return (
    <AppContext.Provider
      value={{
        points,
        goals,
        focusSessions,
        redeemedBreaks,
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
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}
