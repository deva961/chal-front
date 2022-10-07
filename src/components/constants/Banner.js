import React from "react";

function Banner({ title, text, photo, btntext }) {
  return (
    <div className="bg-mainslider">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16">
        <div className="col-span-1 my-auto">
          <h3 className="font-semibold leading-normal text-5xl text-white">
            {title}
          </h3>
          {text ? <p className="text-white text-2xl mt-5 tracking-wide">{text}</p> : ""}
        </div>
        <div className="col-span-1 my-auto">
          <img src={photo} className="h-[450px] mx-auto" alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={require("../../assets/Main_Slide_Enquire_Book-150x78.png")}
          className="h-10"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <button className="text-white font-bold mt-6 mb-14 tracking-wide text-3xl bg-[#1B75BB] px-5 py-4 border-2 border-white rounded-3xl">
          {btntext}
        </button>
      </div>
    </div>
  );
}

export default Banner;
