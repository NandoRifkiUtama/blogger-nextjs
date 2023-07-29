import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg mb-4 p-2 md:p-4">
      <h3 className="font-semibold p-3 border-b border-gray-400">Categories</h3>
      <div>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <p className="flex gap-3 items-center my-6 font-semibold text-sm hover:text-gray-400 duration-300 px-3">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
