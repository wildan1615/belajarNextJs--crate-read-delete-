"use client";

import { Home2 } from "solar-icon-set/essentionalui";
import { Diploma } from "solar-icon-set/school";
import { VideoLibrary } from "solar-icon-set/videoaudiosound";
import { createContext } from "react";
import { User } from "@/components/user";

export const userContext = createContext();

export const DashboardTemplate = ({ children }) => {
  const username = "Wildan_A";
  return (
    <userContext.Provider value={{ username }}>
      <div className="flex">
        <aside className="w-[230px] bg-slate-50 border-r p-4">
          <User></User>
          <section>
            <Menu label="Dasboard" icon={<Home2 />}></Menu>
            <Menu label="Courses" icon={<VideoLibrary />}></Menu>
            <Menu label="Certificate" icon={<Diploma />}></Menu>
          </section>
        </aside>
        <main className="w-[calc(100%-230px)] p-5">
          <div className="max-w-3xl m-auto">{children}</div>
        </main>
      </div>
    </userContext.Provider>
  );
};

const Menu = ({ label, icon }) => {
  return (
    <div className="bg-transparent hover:bg-green-500 hover:text-white text-sm font-medium rounded-lg px-3 py-2 flex items-center gap-2">
      {icon}
      <div>{label}</div>
    </div>
  );
};
