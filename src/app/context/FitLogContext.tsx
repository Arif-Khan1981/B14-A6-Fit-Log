"use client";

import { createContext, useContext, useEffect, useState } from "react";
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

  // This tells us whether localStorage has been loaded
  const [hydrated, setHydrated] = useState(false);

  // =========================
  // LOAD FROM LOCAL STORAGE
  // =========================
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedCompleted = localStorage.getItem("fitlog-completed");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
    }

    // LocalStorage data has now been loaded
    setHydrated(true);
  }, []);

  // =========================
  // SAVE PLAN
  // =========================
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  // =========================
  // SAVE SAVED WORKOUTS
  // =========================
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);

  // =========================
  // SAVE COMPLETED
  // =========================
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completed)
    );
  }, [completed, hydrated]);

  // =========================
  // ADD TO PLAN
  // =========================
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

  // =========================
  // REMOVE FROM PLAN
  // =========================
  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter(
        (workout) => workout.id !== id
      )
    );

    // Also remove its "completed" status
    setCompleted((currentCompleted) =>
      currentCompleted.filter(
        (completedId) => completedId !== id
      )
    );
  };

  // =========================
  // SAVE WORKOUT
  // =========================
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

  // =========================
  // REMOVE FROM SAVED
  // =========================
  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) =>
      currentSaved.filter(
        (workout) => workout.id !== id
      )
    );
  };

  // =========================
  // MARK AS DONE
  // =========================
  const markAsDone = (id: number) => {
    setCompleted((currentCompleted) => {
      if (currentCompleted.includes(id)) {
        return currentCompleted;
      }

      return [...currentCompleted, id];
    });
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        completed,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
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