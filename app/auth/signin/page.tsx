import SignInFirebase from "@/components/auth/sign-in-firebase";
import React from "react";
import TopUser from "./components/top-global-leaderboard/top-global-leaderboard";
import Instructions from "./components/instructions/instructions";
import { TUserTopRanks } from "./type/type-top-users";
import LayoutLoginDashboard from "@/components/layout-login-dashboard/page";

const SignInPage = async () => {
  const dummyUserTopRanks: TUserTopRanks[] = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      point: 2500,
      bgColor: "#FF4B91",
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      point: 3200,
      bgColor: "#FF7676",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Samuel Green",
      point: 2900,
      bgColor: "#FFCD4B",
    },
  ];
  return (
    <LayoutLoginDashboard>
      <section className="content flex flex-col md:flex-row text-white gap-x-3">
        <div>
          <section className="login-firebase bg-[#524DBE] rounded-[30px] p-4 mb-3 text-center">
            <p className="font-[900] text-3xl mb-2">
              <span className="text-[#FFCD4B]">LOGIN</span> FOR PLAY
            </p>
            <SignInFirebase />
          </section>
          <section className="top-global-leaderboard bg-[#524DBE] rounded-[30px] px-5 py-5 text-center">
            <p className="font-[900] text-3xl mb-2">
              <span className="text-[#FFCD4B]">TOP 3</span> LEADERBOARD
            </p>
            <div className="flex flex-col gap-y-4 mt-5">
              {dummyUserTopRanks.map((user, index) => (
                <TopUser
                  key={index}
                  bgColor={user?.bgColor}
                  img={user?.img}
                  name={user?.name}
                  point={user?.point}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="instructions w-[622px]">
          <Instructions />
        </section>
      </section>
    </LayoutLoginDashboard>
  );
};

export default SignInPage;
