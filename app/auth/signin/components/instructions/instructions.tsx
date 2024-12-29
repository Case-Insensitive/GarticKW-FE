import React from "react";

const Instructions = () => {
  return (
    <div className="border border-white rounded-[30px] w-full h-full text-center py-3">
      <header>
        <p className=" font-[900] text-3xl">
          <span className="text-[#FFCD4B]">HOW</span> TO PLAY
        </p>
      </header>
      <div className="flex justify-center">
        <img
          src="/signin/instructions.png"
          alt=""
          className="my-4 text-center"
        />
      </div>
      <section>
        <img src="" alt="" />
        <h1 className="text-[#FFCD4B] font-[900] text-2xl">
          1. AUTHENTICATION
        </h1>
        <p>Login using Google.</p>
        <p>Your game points will be saved</p>
      </section>
      <div className="flex justify-center my-2">
        <img src="/signin/steps.png" alt="" className="scale-75" />
      </div>
    </div>
  );
};

export default Instructions;
