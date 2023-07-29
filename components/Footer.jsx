import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black/90 rounded-t-lg p-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left mt-10">
        <div className="md:col-span-6 md:text-center">
          <h3 className="font-bold text-xl md:text-2xl">Blogger.</h3>
        </div>
        <div className="md:col-span-3">
          <div className="flex flex-col text-xs md:text-sm gap-2">
            <p>Help Desk</p>
            <p>Customer Service</p>
            <p>Business</p>
            <p>Event</p>
            <p>Contact Person</p>
            <p>Feedback</p>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="flex flex-col text-xs md:text-sm gap-2">
            <p>Account</p>
            <p>Setting</p>
            <p>Article</p>
            <p>Technology</p>
            <p>Guess</p>
            <p>New Topic</p>
          </div>
        </div>
      </div>
        <div className="w-full bg-black/90 text-center py-8 text-xs text-sky-300">Created By Nando Rifki</div>
    </>
  );
};

export default Footer;
