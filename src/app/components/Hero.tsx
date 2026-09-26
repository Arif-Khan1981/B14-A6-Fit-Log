import Link from "next/link";

const HeroPage = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto flex flex-col gap-10 py-10 text-white lg:card-side lg:flex-row lg:items-center lg:gap-20">

        {/* Left side */}
        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-[#ccff00]">
            WORKOUT LIBRARY
          </h2>

          <p className="pt-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </p>

          <p className="pb-5 pt-5 pr-10 text-lg text-gray-300 md:text-xl">
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into today's plan and watch
            the week's work add up.
          </p>

          <div className="card-actions justify-start">
            <Link
                href ="#library"
            //   href="/workouts"
              className="btn bg-[#ccff00] text-lg font-bold text-black hover:bg-[#718c06]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        {/* Right side */}
        <figure className="lg:w-1/3">
          <img
            src="/assets/banner.png"
            alt="FitLog workout banner"
            className="w-full object-cover"
          />
        </figure>

      </div>
    </section>
  );
};

export default HeroPage;