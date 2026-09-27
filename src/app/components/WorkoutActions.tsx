"use client";

import { Workout } from "../types/workout";
import { useFitLog } from "../context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const {
    addToPlan,
    saveWorkout,
  } =useFitLog();
  
  
    const handleAddToPlan = () => {
    addToPlan(workout)
  };

  const handleSave = () => {
    saveWorkout(workout)
  };

  return (
    <div className="mt-9 flex flex-wrap gap-4">
      {/* Add to Plan */}
      <button
        onClick={handleAddToPlan}
        className="btn border-0 bg-[#ccff00] px-6 text-black hover:bg-[#ccff00]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>

        Add to today's plan
      </button>

      {/* Save */}
      <button
        onClick={handleSave}
        className="btn border border-gray-700 bg-transparent px-6 text-gray-200 hover:border-gray-400 hover:bg-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
          />
        </svg>

        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;