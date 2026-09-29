const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-20 text-white">
      <div className="flex flex-col items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

        <p className="mt-5 text-lg font-semibold text-gray-300">
          Loading workouts…
        </p>
      </div>
    </main>
  );
};

export default Loading;