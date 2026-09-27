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
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        {workout.name}
      </h1>

      <p className="mt-4">
        {workout.description}
      </p>
    </div>
  );
}