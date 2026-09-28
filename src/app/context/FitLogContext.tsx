"use client";

import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Workout } from "../types/workout";


interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  completed: number[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);
  const markAsDone = (id: number) => {
  setCompleted((currentCompleted) => {
    if (currentCompleted.includes(id)) {
      return currentCompleted;
    }

    return [...currentCompleted, id];
  });
};

  // Load data from localStorage
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  // Save plan whenever it changes
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // Save saved workouts whenever they change
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      const alreadyExists = currentPlan.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((currentSaved) => {
      const alreadyExists = currentSaved.some(
        (item) => item.id === workout.id
      );

      if (alreadyExists) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id)
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
        completed,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}