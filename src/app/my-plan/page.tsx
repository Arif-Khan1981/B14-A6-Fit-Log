"use client";

import { useFitLog } from "../context/FitLogContext";

const MyPlanPage = () => {
  const { plan, saved } = useFitLog();

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
            <p className="text-sm text-gray-400">Exercises</p>
            <p className="mt-2 text-3xl font-black">
              {plan.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#15181e] p-6">
            <p className="text-sm text-gray-400">Minutes</p>
            <p className="mt-2 text-3xl font-black">
              {plan.reduce((total, workout) => total + workout.duration, 0)}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#15181e] p-6">
            <p className="text-sm text-gray-400">Calories</p>
            <p className="mt-2 text-3xl font-black">
              {plan.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0
              )}
            </p>
          </div>

        </div>

        {/* Today's Plan */}
        <section>
          <h2 className="mb-6 text-2xl font-black uppercase">
            Today's Plan
          </h2>

          {plan.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-700 p-10 text-center">
              <p className="text-gray-400">
                Your plan is empty.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Add workouts from the library to build your plan.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {plan.map((workout) => (
                <div
                  key={workout.id}
                  className="flex gap-5 rounded-2xl border border-gray-800 bg-[#15181e] p-4"
                >
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-28 w-28 rounded-xl object-cover"
                  />

                  <div>
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
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
};

export default MyPlanPage;