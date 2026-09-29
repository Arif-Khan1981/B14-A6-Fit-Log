"use client";

import { useState } from "react";
import { Workout } from "../types/workout";
import { useFitLog } from "../context/FitLogContext";
import Toast from "./Toast";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveWorkout } = useFitLog();

  const [message, setMessage] = useState("");

  const showToast = (text: string) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleAddToPlan = () => {
    addToPlan(workout);
    showToast("Added to today's plan");
  };

  const handleSave = () => {
    saveWorkout(workout);
    showToast("Workout saved for later");
  };

  return (
    <>
      <div className="mt-9 flex flex-wrap gap-4">
        <button
          onClick={handleAddToPlan}
          className="btn border-0 bg-[#ccff00] px-6 text-black hover:bg-[#ccff00]"
        >
          Add to today's plan
        </button>

        <button
          onClick={handleSave}
          className="btn border border-gray-700 bg-transparent px-6 text-gray-200 hover:border-gray-400 hover:bg-transparent"
        >
          Save for later
        </button>
      </div>

      {message && <Toast message={message} />}
    </>
  );
};

export default WorkoutActions;