"use client";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContent from "./content/MainContent";

function Version2MainPage() {
  return (
    <div className="bg-white overflow-hidden pl-8 max-md:pl-5">
      <div className="bg-white flex w-full max-w-[1408px] items-stretch max-md:max-w-full">
        <div className="flex min-w-60 w-full items-stretch h-full flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex min-h-[66px] w-full flex-col justify-between pl-4 pr-8 pt-4 pb-2.5 border-[rgba(234,236,240,1)] border-b max-md:max-w-full max-md:pr-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4657d6ada278753b496a1cdaaaa7ac3d522b81fc?placeholderIfAbsent=true"
                className="aspect-[4.61] object-contain w-[184px] max-w-full"
                alt="Logo"
              />
            </div>
            <div className="flex w-full items-stretch justify-between flex-1 flex-wrap h-full max-md:max-w-full">
              <Sidebar />
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Version2MainPage;
