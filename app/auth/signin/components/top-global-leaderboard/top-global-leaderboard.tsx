import React, { FC } from "react";
import { TUserTopRanks } from "../../type/type-top-users";

const TopUser: FC<TUserTopRanks> = ({ img, name, point, bgColor }) => {
  return (
    <div>
      <div
        className="flex justify-between items-center px-5 py-2 w-[422px] rounded-[10px]"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex gap-x-2 items-center">
          <div className="border-2 border-white rounded-full">
            <img
              src={img}
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <p className="font-[900]">{name}</p>
        </div>
        <div>{point} point</div>
      </div>
    </div>
  );
};

export default TopUser;
