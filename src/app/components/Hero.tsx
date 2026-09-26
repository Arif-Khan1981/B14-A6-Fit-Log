import React from 'react';

const HeroPage = () => {
    return (
    <div className=" bg-black">
    <div className="container mx-auto card lg:card-side text-white  shadow-sm py-5 gap-20">
        <div className="card-body">
            <h2 className="card-title">WORKOUT LIBRARY</h2>
            <p className='pt-8 text-7xl font-bold font-sans font-stretch-condensed'>TRAIN WITH INTENT. LOG <br />EVERY SET.</p>
            <p className='pt-5 pr-10 pb-5 text-2xl'>FitLog is a dark, no-nonsense gym companion: 
                pick a lift, lock it into today's plan and watch the weeks work add up</p>
            <div className="card-actions justify-start">
                <button className="btn btn-primary w- bg-[#ccff00] text-black text-lg font-bold">BROWSE WORKOUTS</button>
            </div>
        </div>
        
        <figure>
        <img
        src="./assets/banner.png"
        alt="Banner"
        width={1000}
        height={400}
        />
        </figure>
    </div>
    </div>
    );
};

export default HeroPage;