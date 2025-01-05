"use client";
import React, { useEffect, useState } from "react";
import StepBar from "../step-bar/step-bar";
import { LIST_INSTRUCTIONS } from "../../constants/list-instructions";

const Instructions = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev > 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-white rounded-[30px] w-full h-full text-center py-5">
      <header>
        <p className=" font-[900] text-3xl">
          <span className="text-[#FFCD4B]">HOW</span> TO PLAY
        </p>
      </header>
      <div className="overflow-x-hidden">
        <div
          className="flex w-max transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentStep * 620}px)`,
          }}
        >
          {LIST_INSTRUCTIONS.map((instruction, index) => {
            return (
              <div key={index} className="w-[620px]">
                <div className="flex justify-center ">
                  <img
                    src={`/signin/${instruction?.imagePath}`}
                    alt=""
                    className="my-4 text-center h-[200px] w-[200px] object-contain"
                  />
                </div>
                <section className="flex flex-col items-center">
                  <h1 className="text-[#FFCD4B] font-[900] text-2xl">
                    {instruction?.id + 1}. {instruction?.title}
                  </h1>
                  <p className="my-1  max-w-[50%] text-sm">
                    {instruction?.description}
                  </p>
                </section>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-3 mb-2">
        <StepBar currentStep={currentStep} />
      </div>
    </div>
  );
};

export default Instructions;
