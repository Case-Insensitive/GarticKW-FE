"use client";
import React from "react";

const LayoutLoginDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#0802A3] h-screen flex flex-col items-center justify-center ">
      <header className="flex flex-col justify-center mb-6 scale-90">
        <img src="/signin/headers_1.png" alt="" />
        <img src="/signin/headers_2.png" alt="" />
      </header>
      {children}
      <footer className="flex justify-between text-white gap-x-4 mt-4">
        <p>Made with love and patience</p>
        <p>
          @henrykev_ @centwong_ @putu_arrtha @naufaladib @nur.al_azhr
          @rafly.ra.af
        </p>
      </footer>
      <div>
        <img
          src="/signin/footers.png"
          alt=""
          className="fixed bottom-0 left-12"
        />
      </div>
    </main>
  );
};

export default LayoutLoginDashboard;
