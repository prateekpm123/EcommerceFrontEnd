import Input from "@/projectComponents/Input";
import React from "react";

export const NavBar: React.FC = () => {
  return (
    <>
      <div className="w-full h-12 bg-slate-800 inline-flex items-center justify-between">
        <div className="text-sm text-slate-100 pl-10 inline-flex items-center">
          <p className="text-sm text-slate-100 hover:text-slate-400 pr-8">Amazom</p>
          <p className="text-sm text-slate-100 hover:text-slate-400 pr-8">Home</p>
        </div>
        <Input placeHolder="search" name="NavBarInput" id="searchInputBar"></Input>
        <div className="text-sm text-slate-100 pl-10 inline-flex items-center">
          <p className="text-sm text-slate-100 hover:text-slate-400 pr-8">Cart</p>
          <p className="text-sm text-slate-100 hover:text-slate-400 pr-8">Sign In</p>
        </div>
      </div>
    </>
  );
};
