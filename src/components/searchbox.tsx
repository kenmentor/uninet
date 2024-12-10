"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

type SearchboxProps = {
  setKeyword: (value: any) => void;
};

const Searchbox = ({ setKeyword }: SearchboxProps) => {
  const [array, setArray] = useState([
    { text: "csc", active: false },
    { text: "phy", active: false },
    { text: "maths", active: false },
    { text: "stats", active: false },
    { text: "french", active: false },
    { text: "others", active: false },
    { text: "biology", active: false },
    { text: "chemistry", active: false },
    { text: "geography", active: false },
  ]);

  const [cate, setCate] = useState<string[]>([]);

  const activate = (id: string) => {
    setArray((prev) =>
      prev.map((item) =>
        item.text === id ? { ...item, active: !item.active } : item
      )
    );

    setCate((prev) => {
      // Add or remove the clicked item from the `cate` array
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id); // Remove if it exists
      } else {
        return [...prev, id]; // Add if it doesn't exist
      }
    });

    // Update the `setKeyword` prop
    setKeyword((prev: any) => ({
      ...prev,
      category: cate,
    }));
  };


  return (
    <nav className="flex overflow-x-auto px-6 py-4 gap-4 bg-gray-800 rounded-md shadow-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
      <Link
        href={"/upload"}
        style={{
          margin: "0",
          padding: "0",
          display: "flex",
        }}
      >
        <div
          className={`flex-shrink-0 flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg cursor-pointer hover:text-white transition-all duration-200`}
        >
          <IoAdd />
        </div>
      </Link>
      {array.map((data, index) => (
        <div
          onClick={() => activate(data.text)}
          key={index}
          className={`flex-shrink-0 flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg cursor-pointer ${
            data.active && "bg-blue-600"
          } hover:text-white transition-all duration-200`}
        >
          {data.text}
        </div>
      ))}
    </nav>
  );
};

export default Searchbox;
