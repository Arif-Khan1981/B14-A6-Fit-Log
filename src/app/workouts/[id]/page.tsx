import { Workout } from "../../types/workout";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<Workout> => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
};

export default async function WorkoutDetails({
  params,
}: PageProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-5 text-white md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">

        {/* ================= IMAGE ================= */}
        <div>
          <img
            src={workout.image}
            alt={workout.name}
            className="h-125 w-full rounded-2xl object-cover md:h-162.5 lg:h-184"
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col">

          {/* Workout Name */}
          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base leading-6 text-gray-400 md:text-lg">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-3">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-4 py-1 text-sm font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= SPECS ================= */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-800 bg-[#15181e]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Equipment
              </span>

              <span className="text-sm text-gray-200">
                {workout.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Difficulty
              </span>

              <span className="text-sm text-gray-200">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Sets
              </span>

              <span className="text-sm text-gray-200">
                {workout.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Reps
              </span>

              <span className="text-sm text-gray-200">
                {workout.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Duration
              </span>

              <span className="text-sm text-gray-200">
                {workout.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Calories
              </span>

              <span className="text-sm text-gray-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Rating
              </span>

              <span className="text-sm text-gray-200">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-8">
            <h2 className="text-lg font-black uppercase tracking-wide">
              Instructions
            </h2>

            <div className="mt-4 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4 text-sm leading-6 text-gray-300"
                >
                  <span className="min-w-5 font-medium text-gray-400">
                    {index + 1}.
                  </span>

                  <p>{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-9 flex flex-wrap gap-4">

            {/* Add to Plan */}
            <button
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
        </div>
      </div>
    </main>
  );
}