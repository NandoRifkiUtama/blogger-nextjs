import React from "react";

const Author = ({ author }) => {
  return (
    <div className="bg-black/60 flex flex-col items-center justify-center px-4 py-6 mt-4 rounded-lg gap-2">
      <div className="h-10 w-10">
        <img
          className="w-full h-full rounded-full object-cover"
          src={author[0].photo.url}
          alt={author[0].name}
        />
      </div>
      <h3 className="text-gray-200 font-semibold">{author[0].name}</h3>
      <p className="text-center text-xs text-gray-300 md:w-[500px]">{author[0].bio}</p>
    </div>
  );
};

export default Author;
