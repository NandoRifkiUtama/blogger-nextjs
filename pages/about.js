import React from "react";
import { AboutDetail, PostWidget, Categories } from "../components";

const about = () => {
  return (
    <div className="container mx-auto px-10 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12">
        <div className="col-span-1 md:col-span-9 lg:col-span-8">
          <AboutDetail />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-4 text-gray-800">
          <div className="md:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
