"use client";

import { Avatar } from "./avatar";
import { useContext } from "react";
import { userContext } from "./dasboard/dasboard.template";

export const User = () => {
  const { username } = useContext(userContext);
  return (
    <div className="flex justify-between items-center">
      <div className="p-4 font-bold text-green-500 text-lg tracking-tight">
        {username}
      </div>
      <Avatar username={username}></Avatar>
    </div>
  );
};
