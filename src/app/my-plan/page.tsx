"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFitLog } from "../context/FitLogContext";
import Toast from "../components/Toast";
import { useRouter } from "next/navigation";

const MyPlanContent = () => {
  
  const {
  plan,
  saved,
  completed,
  removeFromPlan,
  removeFromSaved,
  markAsDone,
} = useFitLog();
  
  const searchParams = useSearchParams();
  const router =useRouter();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">(
    searchParams.get("tab") === "saved" ? "saved" : "plan"
    );
  useEffect(() => {
  const tab = searchParams.get("tab");

  if (tab === "saved") {
    setActiveTab("saved");
  } else {
    setActiveTab("plan");
  }
}, [searchParams]);
  

  const [message, setMessage] = useState("");

  const showToast = (text: string) => {
  setMessage(text);

  setTimeout(() => {
    setMessage("");
  }, 2000);
};

  const activeWorkouts = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black uppercase md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-gray-400">
            Your workout plan and saved exercises.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-gray-800 bg-[#15181e] p-6">
            <p className="text-sm text-gray-400">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black">
              {plan.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#15181e] p-6">
            <p className="text-sm text-gray-400">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#15181e] p-6">
            <p className="text-sm text-gray-400">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-8 border-b border-gray-800">

          <button
            onClick={() => {
            setActiveTab("plan");
            router.push("/my-plan?tab=plan");
            }}
            className={`pb-4 text-sm font-bold uppercase transition ${
            activeTab === "plan"
            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
            : "text-gray-500 hover:text-white"
            }`}
          >
            Today's Plan ({plan.length})
          </button>

          <button
            onClick={() => {
            setActiveTab("saved");
            router.push("/my-plan?tab=saved");
            }}
            className={`pb-4 text-sm font-bold uppercase transition ${
            activeTab === "saved"
            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
            : "text-gray-500 hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>

        </div>

        {/* Workout list */}
        <section>

          {activeWorkouts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-700 p-10 text-center">
              <p className="text-gray-300 text-2xl font-bold">
                {activeTab === "plan"
                  ? "YOUR PLAN IS EMPTY"
                  : "NOTHING HERE YET"}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {activeTab === "plan"
                  ? "Add workouts from the library to build your plan."
                  : "Browse the library and add a lift to get today moving."}
              </p>
              <Link
                href="/#library"
                className="btn mt-8 bg-[#ccff00] text-lg font-bold text-black hover:bg-[#ccff00]"
              >
                GO TO WORKOUTS
              </Link>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">

              {activeWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className="flex gap-5 rounded-2xl border border-gray-800 bg-[#15181e] p-4"
                >
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-28 w-28 rounded-xl object-cover"
                  />


                <div className="flex-1">
                  <h3 className="font-bold">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {workout.duration} min •{" "}
                    {workout.caloriesBurned} kcal
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="btn btn-sm bg-white text-black hover:bg-gray-200"
                    >
                      View Details
                    </Link>
    
                    {activeTab === "plan" && (
                    <button
                      onClick={() => {
                      markAsDone(workout.id);
                      showToast("Workout marked as done");
                      }}
                      className="btn btn-sm bg-[#ccff00] text-black hover:bg-[#ccff00]"
                    >
                      {completed.includes(workout.id) ? "Done" : "Mark as Done"}
                    </button>
                    )}

                    <button
                      onClick={() => {
                      if (activeTab === "plan") {
                      removeFromPlan(workout.id);
                      showToast("Workout removed from today's plan");
                      } else {
                      removeFromSaved(workout.id);
                      showToast("Workout removed from saved");
                      }
                      }}
                      className="btn btn-sm border border-red-500 bg-transparent text-red-400 hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </button>

                  </div>
                </div>
                  
              </div>
              ))}
            </div>
          )}

        </section>
        {message && <Toast message={message} />}
      </div>
    </main>
  );
};

const MyPlanPage = () => {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-gray-400">Loading workouts…</p>
          </div>
        </main>
      }
    >
      <MyPlanContent />
    </Suspense>
  );
};

export default MyPlanPage;